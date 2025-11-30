const http = require("http");

// 서버 생성
const server = http.createServer((req, res) => {
  console.log("요청 URL:", req.url); // 요청 경로 출력

  // 경로에 따라 다른 응답 주기
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain;charset=UTF-8" });
    res.end("메인 페이지입니다!");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain;charset=UTF-8" });
    res.end("소개 페이지입니다!");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain;charset=UTF-8" });
    res.end("연락처 페이지입니다!");
  } else {
    // 없는 주소 → 404 에러
    res.writeHead(404, { "Content-Type": "text/plain;charset=UTF-8" });
    res.end("404: 페이지를 찾을 수 없습니다.");
  }
});

// 3000번 포트에서 실행
server.listen(3000, () => {
  console.log("서버 실행 중: http://localhost:3000");
});