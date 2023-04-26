function solution(arr)
{
    let sol=[];
    for(let i=0; i<arr.length;i++){
        if(arr[i]!==arr[i+1]){
            sol.push(arr[i])
        }
    }return sol;
    // return arr.filter((val,index)=>val !==arr[index+1])
}