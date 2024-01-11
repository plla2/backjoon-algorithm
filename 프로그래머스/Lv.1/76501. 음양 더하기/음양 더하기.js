function solution(absolutes, signs) {
    let result=[];
    for(let i=0; i<signs.length; i++){
        if(signs[i]===false){
            result.push(-absolutes[i]);
        }else{
            result.push(+absolutes[i]);
        }
    }
    return result.reduce((acc,cur)=>acc+cur,0)
}