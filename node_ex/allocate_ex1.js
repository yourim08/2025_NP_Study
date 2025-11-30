const fruits = ['apple', 'banana', 'cherry', 'grape']; 
// 코드 작성
const [first, second, ...others] = fruits; 

console.log(first) // apple
console.log(second) // banana
console.log(others) // ['cherry','grape']