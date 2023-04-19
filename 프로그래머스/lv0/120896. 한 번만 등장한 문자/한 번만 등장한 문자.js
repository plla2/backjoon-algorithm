function solution(s) {
    let sol=[];
    for(let c of s) if(s.indexOf(c)===s.lastIndexOf(c)) sol.push(c)
    return sol.sort().join("")
}