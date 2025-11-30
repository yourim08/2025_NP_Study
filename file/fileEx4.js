// 이미지 복사

const fs = require("fs");

// 파일 읽기 (비동기 - 콜백)
fs.readFile("profileImg.png", (err, data) => {
    if (err) {
        console.error("파일 읽기 실패:", err);
        return;
    }
    console.log("비동기 읽기:", data);


    // 파일 쓰기 (비동기 - 콜백) 
    // 맨 마지막에 실행됨
    fs.writeFile("profileImg2.png", data, (err) => {
        if (err) {
            console.error("파일 쓰기 실패:", err);
            return;
        }
        console.log("비동기 쓰기 완료!");
    });

});
