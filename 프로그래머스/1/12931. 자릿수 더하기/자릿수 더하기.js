function solution(n)
{
    return n.toString().split("").reduce((acc,cur)=>Number(acc)+Number(cur),0)
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

}