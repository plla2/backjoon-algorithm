function solution(num, k) {
    let arr=String(num).split("");
    // return arr;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===String(k)){
            return i+1
        }
    }return -1
}