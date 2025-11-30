class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    greet() {
        console.log("부모 클래스 greet");
    }
}

class Student extends Person {
    constructor(name, id) { 
        super(name, id)
    }
    greet() {
        console.log(super.greet()); // 부모꺼 한번 실행
        console.log(`학생 이름: ${this.name}`);
    }

    study() {
        console.log(`${this.name}는 지금 공부중입니다!`);
    }
}

// 출력 및 확인
const s1 = new Student("김윤지", "2025");
s1.greet();
s1.study(); 