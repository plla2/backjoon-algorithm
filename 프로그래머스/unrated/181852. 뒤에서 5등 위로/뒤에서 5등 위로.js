function solution(num_list) {
    let arr=num_list.sort((a,b)=>a-b);
    return arr.slice(5)
}