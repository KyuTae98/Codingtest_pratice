function solution(number, k) {
    let arr = number.split("").reverse();
    let stack = [];
    while(k>0&&arr.length>0){
        let ele = arr.pop();
        while(stack.at(-1)<ele&&k>0){
            stack.pop();
            k--;
        }
        stack.push(ele);
    }
    if(k>0) stack=stack.slice(0,-k);
    return [...stack,...(arr.reverse())].join("");
}
//같으면 뒤로 점프?