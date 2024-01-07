function solution(n) {
    let x=Math.sqrt(n)
    return x===parseInt(x) ? (x+1)**2 : -1
}