function solution(scores) {
    let wanho = scores.reverse().pop();
    let stack = [];
    scores.sort((a,b)=>(b[0]+b[1])-(a[0]+a[1]))
    for(let i=0;i<scores.length;i++){
        let [x,y] = scores[i];
        if(x>wanho[0]&&y>wanho[1])
            return -1;
        if(x+y>wanho[0]+wanho[1]){
            let check = 0;
            for(let j=0;j<stack.length;j++){
                if(stack[j][0]>scores[i][0]&&stack[j][1]>scores[i][1]){
                    check = 1;
                    break;
                }
            }
            if(check===0)
                stack.push(scores[i])
        }
        else
            break
    }
    return stack.length+1;
}
//근무태도, 동료평가 점수 둘다 낮을 경우 무조건 못받음 -> 원호보다 합이 높아도 떨어질 수 있다. 
//첫번째인 완호의 등수 못받으면 -1