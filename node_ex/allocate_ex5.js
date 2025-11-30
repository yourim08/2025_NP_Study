var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];

// 함수 선언 : fnFindMax
function fnFindMax(arguments){
    return (Math.max(...arguments));
}

console.log(fnFindMax(numbers)) // fnFindMax 호출하기, numbers 매개변수로 넣어주기