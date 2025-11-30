// server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath;

  // 라우팅
  if (req.url === "/" || req.url === "/index") {
    filePath = path.join(__dirname, "pages", "index.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "pages", "about.html");
  } else if (req.url === "/contact") {
    filePath = path.join(__dirname, "pages", "contact.html");
  } else {
    filePath = path.join(__dirname, "pages", "404.html");
  }

  // 파일 읽기 (비동기 콜백 방식)
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=UTF-8" });
      res.end("서버 오류: " + err.message);
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("서버 실행 중 : http://localhost:3000");
});