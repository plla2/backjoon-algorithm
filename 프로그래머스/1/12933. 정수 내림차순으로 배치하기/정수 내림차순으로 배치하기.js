function solution(n) {
    let v= [...n.toString()].map(Number).sort((a,b)=>b-a).join("");
    return parseInt(v)
}