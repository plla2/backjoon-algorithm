function solution(n) {
    let odd=[];
    let even=[];
    for(let i=0; i<=n; i++){
        i%2===0 ? even.push(i) : odd.push(i);
    }
    return n%2===0 ? even.reduce((acc,cur)=>acc + cur**2,0) : odd.reduce((acc,cur)=>acc+cur,0)
}