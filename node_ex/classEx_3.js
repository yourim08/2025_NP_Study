//  홀수 짝수
// NumberOE 클래스에는 save라는 setter 역할 함수 존재
// 데이터를 넣으면 odd에는 홀수가 even에는 짝수가 들어간다.
// NumberOE 클래스에는 showOdd라는 getter 역할 함수 존재
// 홀수만 출력된다.
// NumberOE 클래스에는 showEven라는 getter 역할 함수 존재
// 짝수만 출력된다.
// NumberOE 클래스에는 showAll라는 getter 역할 함수 존재
// 모든 수가 출력된다.


class NumberOE { 
	constructor() {
		this.odd = [];
		this.even = []; 
	}
	
    set save (arr) {
        arr.forEach((e) => {
            (e%2==0) ? this.even.push(e) : this.odd.push(e);
        });
        console.log(this.even);
    }

    get showAll () {
        return (this.odd.concat(this.even));
        // return [...this.odd, ...this.even]
    }

    get showEven () {
        return this.even;
    }

    get showOdd (){
        return this.odd;
    }
}

// 사용 예시
const oe = new NumberOE();

oe.save = [1, 2, 3, 12, 13, 15];

console.log("홀수:", oe.showOdd);   // [1, 3, 13, 15]
console.log("짝수:", oe.showEven); // [2, 12]
console.log("전체:", oe.showAll);  // [1, 3, 13, 15, 2, 12]