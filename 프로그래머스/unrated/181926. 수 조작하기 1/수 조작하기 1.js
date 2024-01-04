function solution(n, control) {
    let result=n;
    for(let i=0; i<control.length; i++){
        control[i]==='w' ? result+=1 : control[i]==='s' ? result-=1 : control[i]==='d' ? result+=10 : result-=10
    }
    return result;
}