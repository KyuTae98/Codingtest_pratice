function solution(number, k) {
    let count = 0;
    let stack = []
    number = number.split("").reverse()
    let index = 0;
    while(number.length>0&&count<k){
        let ele = number.pop();
        while(count<k&&ele>stack.at(-1)){
            stack.pop();
            count++
        }
        stack.push(ele)
    }
     if(count !== k) stack = stack.slice(0, -(k-count)) 
    return [...stack,...(number.reverse())].join("");
}