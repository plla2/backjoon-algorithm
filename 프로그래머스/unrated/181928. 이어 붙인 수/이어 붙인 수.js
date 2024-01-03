function solution(num_list) {
    let odd= num_list.filter((num)=>num%2===1)
    let even=num_list.filter((num)=>num%2===0)
    let oddSum=odd.reduce((acc,cur)=>acc+String(cur))
    let evenSum=even.reduce((acc,cur)=>acc+String(cur))
    return Number(oddSum)+Number(evenSum)
}