function solution(progresses, speeds) {
    let answer = [];
    let stack = [];
    for (let i=0;i<progresses.length;i++){
        let result = Math.ceil((100-progresses[i])/speeds[i])
        if(!(result<=stack[0]||stack.length===0)){
            answer.push(stack.length)
            stack = [];
        }
        stack.push(result)
    }
    answer.push(stack.length)
    return answer;
}