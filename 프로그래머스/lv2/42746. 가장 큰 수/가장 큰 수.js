function solution(numbers) {
    let sol=""
    numbers=numbers.map(x=>x+"")
    numbers=numbers.sort((a,b)=>(b+a)-(a+b))
    sol=numbers.join("")
    if(sol[0]==="0"){
        sol= "0"
    }
    return sol
}