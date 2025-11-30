const person = {};
const person2 = { job:"teacher" };

// 1) 여기에 코드 작성
person.job = "teacher"; // 추가
person.job = "student"; // 수정

// 2) 여기에 코드 작성
delete person2.job;

console.log(person2.job)
