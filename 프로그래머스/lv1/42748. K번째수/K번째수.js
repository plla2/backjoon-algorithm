function solution(array, commands) {
    let sol=[];
    for(let i=0; i<commands.length; i++){
        let x=array.slice(commands[i][0]-1,commands[i][1])
        x.sort((a,b)=>a-b)
        let y=x.slice(commands[i][2]-1,commands[i][2])
        sol.push(y[0])
    }return sol
}