//클래스 Person 만들기
class Person {
    //name을 받는 생성자 만들기
    constructor(name){
        this.name = name;
    }

    //greet() 메서드 만들기
    greet(){
        return(`안녕하세요, ${this.name}님!`);
    }
}

const p1 = new Person("김윤지");
console.log(p1.greet()); // 메서드 출력