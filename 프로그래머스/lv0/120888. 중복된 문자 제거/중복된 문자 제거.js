function solution(my_string) {
    const newArr = my_string.split("");
    
    const sol = Array.from(new Set(newArr));
    
    return sol.join("");
}
