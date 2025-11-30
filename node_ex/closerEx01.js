function sayHello() {
  console.log("Hello!");
}


// 함수 limitFunc 작성
function limitFunc(name, count) {
  let ct = 0;
  function checkCount() {
    ct++;
    if (ct > count) {
      console.log("더 이상 실행할 수 없습니다!!");
    }
    else {
      name();
    }
  }
  return checkCount;
}

const limitedHello = limitFunc(sayHello, 2);

limitedHello(); // "Hello!"
limitedHello(); // "Hello!"
limitedHello(); // "더 이상 실행할 수 없습니다"