function solution(price, money, count) {
    let totalprice = 0;
    for(i=0; i<=count; i++){
        totalprice+=price*i;
    }
    if(money < totalprice){
       totalprice-=money;
    } else {
        return 0;
    }   
    return totalprice;
}