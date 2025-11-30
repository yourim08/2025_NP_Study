class Animal {
    constructor(type, age = 0){ // 기본값 세팅은 회사에 물어보자
        this.type = type;
        this.age = age;
    }

    addAge(){
        this.age += 1;
    }

    profile(){
        console.log(`${this.type} 종의 ${this.age}살 동물`);
    }

}

class Dog extends Animal {
    constructor(type, age){
        super(type, age);
    }

    profile(){
        console.log(`${this.type} 종의 ${this.age}살 강아지`);
    }
}

class Cat extends Animal {
    constructor(type, age, color="기본"){
        super(type, age)
        this.color = color;
    }

    profile(){
        console.log(`${this.type} 종의 ${this.age}살 ${this.color}색 고양이`);
    }
}

d = new Dog("민준", 17);
c = new Cat("준성", 30, "파랑");
c2 = new Cat("준성", 30);
d.profile();
c.profile();
d.addAge();
d.profile();
c2.profile();
