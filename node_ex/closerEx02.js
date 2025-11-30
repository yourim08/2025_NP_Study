const checker = createChecker();

// 함수 createChecker 작성
function createChecker() {
    let arr = [];
    function checkFruit(fruit) {
        // forEach (include대신)
        let check = false;
        arr.forEach((item) => {
            if (item == fruit) {
                check = true;
                // 리턴하면 함수가 그냥 끝나버린다
            }
        });

        // if (arr.includes(fruit)) {
        //     arr.push(fruit);
        //     return '중복';
        // }    
        
        if(!check){
            arr.push(fruit);
        }
  
        return (check ? '중복' : '통과');
    }

    return checkFruit;
}

console.log(checker("apple"));   // "통과"
console.log(checker("banana"));  // "통과"
console.log(checker("apple"));   // "중복"
console.log(checker("orange"));  // "통과"
console.log(checker("banana"));  // "중복"