function solution(a, b) {
    const isOdd=(num)=>num%2===1
    if(isOdd(a) && isOdd(b) ){
        return Math.pow(a,2) + Math.pow(b,2);
    }else if(isOdd(a) || isOdd(b)){
        return 2 * (a+b);
    }else {
        return Math.abs(a-b);
    }
}