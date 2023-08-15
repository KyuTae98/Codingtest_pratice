function solution(prices) {
    let answer = [];
    let queue = [];
    for(let i=0;i<prices.length-1;i++){
        let count = 1
        for(let j=i+1;j<prices.length-1;j++){
            if(prices[j]>=prices[i])
                count++;
            else
                break
        }
        answer.push(count)
    }
    answer.push(0)
    return answer;
}
//가걱이 떨어지지 않은 기간 -> n**2
//방법 1. 하나를 잡고 filter로 작업하기
//방법 2. 스택, 큐 이용하기