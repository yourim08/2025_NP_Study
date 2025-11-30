// server.js
// [1] 모듈 불러오기
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// [2] 폼 데이터를 읽을 수 있게 설정
app.use(express.urlencoded({ extended: true }));

// [3] HTML 파일을 서비스하기
app.use(express.static(path.join(__dirname, "public")));

// [4] POST 요청 처리하기
app.post("/submit", (req, res) => {
  const { name, age } = req.body; // 폼 데이터 읽기
  console.log("폼 데이터:", req.body);

  res.send(`
    <h2>서버에서 받은 데이터</h2>
    <p>이름: ${name}</p>
    <p>나이: ${age}</p>
    <a href="/">돌아가기</a>
  `);
});

// [5] 서버 실행
app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
