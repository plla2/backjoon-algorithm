function solution(my_string) {
    const x = /^[0-9]+$/;

    let sol = [];
    
    for(let i = 0; i < my_string.length; i++){
        if(x.test(my_string[i])){
            sol.push(Number(my_string[i]));
        }
    }
    
    return sol.sort((a,b) => a - b);
}
