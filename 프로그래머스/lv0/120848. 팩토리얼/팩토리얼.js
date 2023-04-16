function solution(n) {
    let x=1;
    for(let i=1; i<=n; i++){
        x*=i;
        
        if(x===n) return i;
        if(x>n) return i-1;
    }
}