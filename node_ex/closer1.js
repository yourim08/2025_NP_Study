function outerFunction() {
  let count = 0; // 외부 함수의 변수

  function innerFunction() { // 내부 함수
    count++;
    console.log(count);
  }

  return innerFunction;
}

const myCounter = outerFunction(); // outerFunction을 실행하면 innerFunction이 반환됨

myCounter(); // 1
myCounter(); // 2
myCounter(); // 3