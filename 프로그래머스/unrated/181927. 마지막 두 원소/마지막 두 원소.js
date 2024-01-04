function solution(num_list) {
    let last=num_list[num_list.length-1];
    let lastSec=num_list[num_list.length-2];
    last >lastSec ? num_list.push(last-lastSec) : num_list.push(last*2)
    return num_list;
}