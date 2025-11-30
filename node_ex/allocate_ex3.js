printPerson({ name: 'yoon', age: '80' }); // yoon은 80살 입니다.'

// 코드 작성
function printPerson(user){
    const {name: userName, age: userAge} = user;
    console.log(`${userName}은 ${userAge}살 입니다.`);
}