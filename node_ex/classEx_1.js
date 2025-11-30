class Exam {
    #score;
    constructor(score = 0){
        this.#score = score;
    }

    get score(){
        if(this.#score < 60){
            return `불합격!`;
        }
        else {
            return `합격 : ${this.#score}점`;
        }
    }  

    set score (n) {
        if(n < 0 || n> 100){
            console.log("다시 입력해주세요! (0~100)");
        }
        else {
            this.#score = n; 
        }
    }
}

const exam1 = new Exam();

console.log(exam1.score); // 불합격
exam1.score = 85; 
console.log(exam1.score); // 합격 : 85

const exam2 = new Exam(90);
console.log(exam2.score);  // 합격 : 90
exam2.score = 40; 
exam2.score = 150; 
console.log(exam2.score); // 불합격