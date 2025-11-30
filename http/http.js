const http = require("http");
// 모듈을 불러와서 http 변수에 저장

// 서버 생성
const server = http.createServer((req, res) => {
  // req 요청 정보가 들어감
  // res 응답을 작성해서 보낼 수 있는 객체
  console.log("요청 URL:", req.url); // 사용자가 입력한 경로 확인

  // 응답의 상태 코드와 헤더 정보를 설정
  res.writeHead(200, { "Content-Type": "text/plain" }); //200은 성공 코드
  // "Content-Type": "text/plain"  응답 내용을 텍스트로 해석하라는 의미
  res.write("Hello My Name is Yourim"); // write로 연결
  res.end("Hello Node.js Server!"); //응답 본문을 보내면서 응답 정보 닫음
});

// 3000번 포트에서 실행
server.listen(3000, () => {
  console.log("서버 실행 중: http://localhost:3000");
});