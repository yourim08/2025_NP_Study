// 동기 방식으로 파일 읽고 쓰기

const fs = require("fs");

try {
  // 파일 읽기 (동기)
  // 멈춰야 한다 무조건.... 적절히 이용하자~
  const data = fs.readFileSync("sample.txt", "utf8");
  console.log("동기 읽기:", data);

  // 파일 쓰기 (동기)
  fs.writeFileSync("output2.txt", data, "utf8");
  console.log("동기 쓰기 완료!");
} catch (err) {
  console.error("에러 발생:", err);
}