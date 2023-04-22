function solution(citations) {
    let sol=0;
    citations=citations.sort((a,b)=>b-a)
    for(let i=0; i<citations.length; i++){
        if(citations[i]>i){
            sol++;
        }
    }
    return sol
}
// 65310