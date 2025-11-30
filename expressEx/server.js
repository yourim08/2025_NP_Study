// server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express! This is Index");
});

app.get("/hello", (req, res) => {
  res.send("Hello Express!");
});

//(추가1) `/about` 경로 추가 → “소개 페이지입니다.” 출력  
app.get("/about", (req, res) => res.send("소개 페이지입니다."));

//(추가2) `/contact` 경로 추가 → “문의 페이지입니다.” 출력
app.get("/contact", (req, res) => res.send("문의 페이지입니다."));

app.listen(3000, () => console.log("서버 실행 : http://localhost:3000"));



// 1. 요청 예시: http://localhost:3000/user/yoon
// 2. 요청 예시: http://localhost:3000/user/kim
// :을 앞에 붙이면, params안에 들어감
app.get("/user/:name", (req, res) => {
  console.log(req.params);  // 여기 안에 키값 객체로 들어감
  res.send(`안녕하세요, ${req.params.name} 반갑습니다~`);
});

app.get("/square/:num", (req, res) => {
    console.log(req.params);
    res.send(`num의 제곱값: ${req.params.num*req.params.num}`);
})

// 요청 예시: http://localhost:3000/search?keyword=yoon
app.get("/search", (req, res) => {
  res.send(`검색 결과: ${req.query.keyword}`);
});


// 3. 요청 예시: http://localhost:3000/greet?name=김윤지
app.get("/greet", (req, res) => {
  res.send(`${req.query.name}님, 안녕하세요!`)
});

// 4, 5. http://localhost:3000/shop/book/1001?detail=Y
app.get("/shop/:type/:code", (req, res)=>{
  if(req.query.detail == "Y"){
    res.send(`카테고리: ${req.params.type}, 상품번호: ${req.params.code} 1000원입니다.`);
  }
  else {
  res.send(`카테고리: ${req.params.type}, 상품번호: ${req.params.code}`);
  }
});


// readFile 그런거 안해도 보여준다. 이게 바로 미들웨어!!!
app.get('/htmlfile1', (req, res)=> {
  res.sendFile(__dirname + '/index.html');
});