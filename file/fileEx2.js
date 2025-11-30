const fs = require("fs");

// 파일 읽기 (비동기 - 콜백)
fs.readFile("sample2.txt", "utf8", (err, data) => {
    if (err) {
        console.error("파일 읽기 실패:", err);
        return;
    }
    console.log("비동기 읽기:", data);


    // 파일 쓰기 (비동기 - 콜백) 
    // 맨 마지막에 실행됨
    fs.writeFile("output.txt", data, "utf8", (err) => {
        if (err) {
            console.error("파일 쓰기 실패:", err);
            return;
        }
        console.log("비동기 쓰기 완료!");
    });


});

// 파일 쓰기 (비동기 - 콜백)
fs.writeFile("output.txt", "콜백 방식으로 작성!", "utf8", (err) => { 
    // 저 read 안의 콜백 write가 실행되기도 전에, 이 콜백이 먼저 실행되어버림.
    // 그래서 '콜백 방식으로 작성!'은 쓰여졌다가, 'hello world'로 덮이게 됨...
    if (err) {
        console.error("파일 쓰기 실패:", err);
        return;
    }
    console.log("비동기 쓰기 완료!");
});