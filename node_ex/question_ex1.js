const arr1 = [10, 20, 30];
const arr2 = [10, 20, 30, 40, 50];

console.log(arr1[1] ?? "해당 인덱스 값이 존재하지 않습니다.");
// 사실 그냥 undefined로 뜬댜...
console.log(arr2[5] ?? "해당 인덱스 값이 존재하지 않습니다.");

console.log(arr1[5] ?? "해당 인덱스 값이 존재하지 않습니다.");
console.log(arr2[1] ?? "해당 인덱스 값이 존재하지 않습니다.");