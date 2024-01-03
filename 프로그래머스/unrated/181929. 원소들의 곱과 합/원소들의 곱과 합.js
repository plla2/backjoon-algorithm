function solution(num_list) {
    let multi=num_list.reduce((acc,cur)=>acc*cur);
    let sum=num_list.reduce((acc,cur)=>acc+cur);
    return multi<sum**2 ? 1 : 0
}