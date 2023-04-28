function solution(s){
    let x=0;
    for(let i=0; i<s.length; i++){
        x+=s[i]==='(' ? 1: -1;
        if(x<0) return false;
    }
    return x===0? true : false
}