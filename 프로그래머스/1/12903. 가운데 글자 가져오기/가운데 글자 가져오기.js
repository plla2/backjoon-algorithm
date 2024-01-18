function solution(s) {
    let arr=[...s]
    return s.length%2===1 ? arr[Math.floor(arr.length/2)] : arr.slice(Math.floor(s.length/2)-1,Math.floor(s.length/2)+1).join("")
}