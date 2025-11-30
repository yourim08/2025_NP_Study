const students5 = [
  { name: "Kim", score: 80 },
  { name: "Lee", score: 95 },
  { name: "Park", score: 70 }
];
const over90 = students5.filter((v) => v.score >= 90);

console.log(over90); // [{ name: "Lee", score: 95 }]