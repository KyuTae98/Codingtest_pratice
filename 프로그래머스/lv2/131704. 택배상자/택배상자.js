function solution(order) {
    var answer = 0;
    let lug = 1;
    let stack = [];
    for (let i=0;i<order.length;i++){
        let curlug = order[i];
        let checking = true
        while(curlug>=lug)
            stack.push(lug++);
        if(stack.at(-1)===curlug){
            answer++;
            stack.pop();
        }
        else
            break;
    }
    console.log(stack)
    return answer;
}
//stack 하나만 사용