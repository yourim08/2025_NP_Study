function sumAll(...rest) {
    let sum = 0;
    for(let i=0; i<rest.length; i++){
        sum+=rest[i];
    }
    return sum;
}
console.log(sumAll(2, 3, 4)); // 9
console.log(sumAll(5, 2));    // 7