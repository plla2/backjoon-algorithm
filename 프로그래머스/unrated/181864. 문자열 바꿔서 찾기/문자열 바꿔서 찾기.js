function solution(myString, pat) {
    let arr=[...myString].map(v=>v==='A' ? 'B' : "A");
    return arr.join("").includes(pat) ? 1 :0
}