function testFunc(){
    for(i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}

testFunc(1,23,3,4,45,5); // 매개변수를 안써줬는데도 넣어서 호출 가능.....!