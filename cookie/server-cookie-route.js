const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const router = express.Router();
module.exports = router;

// JSON 파서 & 쿠키 서명 키 등록
app.use(express.json());
app.use(cookieParser("secret"));

// 1) 손님 취향 쿠키 굽기 (표시용) — httpOnly: false
app.get("/bakery/bake", (req, res) => {
  const flavor = req.query.flavor || "choco";
  res.cookie("flavor", flavor, {
    httpOnly: false,
    maxAge: 1000 * 60 * 10, // 10분 유지
  });
  res.json({ ok: true, message: `오늘은 ${flavor} 맛!` });
});

// 2) 쿠키 맛보기 (현재 보유 쿠키 확인)
app.get("/bakery/taste", (req, res) => {
  res.json({
    cookies: req.cookies,
    signed: req.signedCookies, // 쿠키에 서명
  });
});

// 3) 다이어트(모든 쿠키 정리)
app.get("/bakery/diet", (req, res) => {
  res.clearCookie("flavor");
  res.clearCookie("ticket");
  res.json({ ok: true, message: "쿠키 제거!" });
});

// 4) 멤버 전용 입장권 발급 (서명 + httpOnly)
app.get("/member/login", (req, res) => {
  // 아무 요청이나 로그인 성공 처리
  res.cookie("ticket", JSON.stringify({ name: "VIP", level: 7 }), {
    signed: true, // 값이 암호화됨, 이게 true면 signedCookies로 분류되고, ticket={"name":"VIP","level":7}; s=<서명값> 이런식으로 저장됨.
    httpOnly: true,
    maxAge: 1000 * 60 * 30, // 30분 유지
  });
  res.json({ ok: true, message: "VIP 입장권 발급!" });
});

// 5) VIP 라운지 (서명 쿠키 필수)
app.get("/member/lounge", (req, res) => {
  const raw = req.signedCookies.ticket; // ticket 불러옴. 이때 서명 값 확인
  if (!raw) {
    return res.status(401).json({ ok: false, message: "입장권이 필요해요." });
  }

  try {
    const user = JSON.parse(raw);
    res.json({ ok: true, message: `어서오세요, ${user.name}님! 등급 ${user.level}` });
  } catch {
    res.status(400).json({ ok: false, message: "입장권이 이상해요." });
  }
});

// 서버 실행
app.listen(3000, () => console.log("http://localhost:3000"));