function Car(brand, year) {
    this.brand = brand;
    this.year = year;
}

// 프로토 타입에 메서드 추가 작성
// 화살표 함수는 this가 안된다...
Car.prototype.age = function(n) {
    return (n - this.year);
}

const myCar = new Car("Hyundai", 2020);
console.log(myCar.age(2025)); // 5  : 2025년  5 출력