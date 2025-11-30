const express = require("express");
const app = express();

//1. 미들웨어 만들기
function checkTime(req, res, next) {
  const hour = new Date().getHours();
  console.log(`현재는 ${hour}시 `)
  if (hour < 9 || hour > 18) {
    return res.send("지금은 근무시간이 아닙니다.");
  }
  next();
}

//2.특정 라우트에 미들웨어 넣기
app.get("/work", checkTime, (req, res) => {
  res.send("근무시간 내 요청입니다.");
});
// 여기 함수 있는 거 만큼 뭐라고요??

// [1] 관리자 인증 미들웨어
function adminAuth(req, res, next) {
  const role = req.query.role;
  if (role !== "admin") {
    return res.status(403).send("관리자만 접근 가능합니다!");
  }
  console.log("관리자 인증 통과");
  next();
}

// [2] 특정 경로에만 미들웨어 적용
app.use("/admin", adminAuth);

// [3] 라우트들
app.get("/admin/dashboard", (req, res) => res.send("관리자 대시보드"));
app.get("/admin/users", (req, res) => res.send("관리자 사용자 관리"));
app.get("/", (req, res) => res.send("일반 사용자 페이지"));

app.listen(3000, () => console.log("http://localhost:3000"));


//  /admin/dashboard?role=admin → 통 과
//  /admin/dashboard?role=user → 차단
//  / → 미들웨어 실행되지 않음