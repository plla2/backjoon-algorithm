function solution(numbers) {
    const strN = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    strN.forEach((str,idx)=>{
        numbers=numbers.replaceAll(str,idx)
    })
    return Number(numbers)
}