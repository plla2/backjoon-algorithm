function solution(arr) {
    let result=[];
    
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr.length<=1 ? [-1] : result=arr
}