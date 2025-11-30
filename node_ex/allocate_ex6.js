function countChars(str){
    var arr = [...str];
    var [nA, nB, nC] = [0,0,0];
    arr.forEach((s) => {
        switch (s) {
            case 'a': nA++;
                break;
            case 'b': nB++;
                break;
            case 'c': nC++;
                break;
        }
    });
    const result = {a: nA, b: nB, c: nC};
    return result;
}
/*

    const obj = {};
    [...str].forEach(e => {
        obj[e] = ( obj[e] ?? 0 ) +1;
    });
    return obj;

*/

console.log(countChars('aacbbb')); // { a : 2, b : 3, c : 1 }