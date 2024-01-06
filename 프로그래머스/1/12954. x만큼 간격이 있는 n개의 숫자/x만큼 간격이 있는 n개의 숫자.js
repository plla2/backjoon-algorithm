function solution(x, n) {
    return Array.from({length:n},(_,idx)=>(idx+1)*x)
}