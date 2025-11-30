// 파일 읽기 / 쓰기

const fs = require('fs');
let readData = "읽어오지 못했습니다.";
fs.readFile("./sample.txt",(err,data)=>{
	if(err){
		throw err;
	}
	console.log(data); //Buffer의 형태 (사람이 읽을 수 없음)
	console.log(data.toString()); // 사람이 읽을 수 있도록 문자열로 변환
});