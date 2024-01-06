function solution(s){
    let r=s.toLowerCase();
    let pCount=0;
    let yCount=0;
    for(let i=0; i<r.length; i++){
        if(r[i]==='p'){pCount+=1}
        if(r[i]==='y'){yCount+=1}
    };
    return pCount===yCount ? true : false;
}