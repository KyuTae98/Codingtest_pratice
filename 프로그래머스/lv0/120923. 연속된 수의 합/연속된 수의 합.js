function solution(num, total) {
    var answer = [];
    let start = total;
    let correct = valueCheck(num,start);
    while(correct!==total){
        if(correct>total)
            start--;
        else
            start++;
        correct = valueCheck(num,start);
    }
    while(num > 0){
        answer.unshift(start)
        start--;
        num--;
    }
    return answer;
}

const valueCheck = (num, value) => {
    let result = 0;
    while(num>0){
        result += value;
        value--;
        num--;
    }
    return result;
}