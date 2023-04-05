function solution(n) {
    let sol=[];
    for(let i=0; i<=n; i++){
        if(n%i===0){
            sol.push(i)
        }
    }return sol;
}