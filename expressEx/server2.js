// server.js
const express = require("express");
const path = require("path"); 
const app = express();

app.use(express.static(path.join(__dirname, "public")));
// app.use("/fake",express.static(path.join(__dirname, "real"))); 
// 이러면 /fake/profileImg.png 해야 나옴


// [1] 첫 번째 미들웨어
app.use((req, res, next) => {
  console.log("첫 번째");
  next();
});

// [2] 두 번째 미들웨어
app.use((req, res, next) => {
  console.log("두 번째");
  next();
});

// [3] 세 번째 미들웨어 (조건 추가 예시)
app.use((req, res, next) => {
  console.log("세 번째");
  if (req.url === "/blocked") {
    // 특정 경로 차단 예시
    return res.send("🚫 접근이 차단되었습니다!");
  }
  next();
});

// [4] 라우터
app.get("/", (req, res) => {
  console.log("라우트 실행");
  res.send(`완료!`);
});

app.get("/about", (req, res) => {
  console.log("/about 라우트 실행");
  res.send("About 페이지");
});

// [5] 서버 실행
app.listen(3000, () => {
  console.log("서버 실행 중: http://localhost:3000");
});
