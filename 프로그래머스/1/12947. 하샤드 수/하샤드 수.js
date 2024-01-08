function solution(x) {
    return x % [...x.toString()].reduce((acc,cur)=>Number(acc)+Number(cur))===0 ? true : false
}