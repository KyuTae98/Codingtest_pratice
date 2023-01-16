function solution(storey) {
    var answer = 0;
    let result = [...String(storey)].map(Number).reverse()
    for(let i=0;i<result.length;i++){
        if(result[i]===5){
            answer+=5;
            if(!isNaN(result[i+1])&&result[i+1]>=5)
                result[i+1]++;
        }
        else if(result[i]>5){
            answer +=(10-result[i]);
            if(isNaN(result[i+1]))
                answer++;
            else
                result[i+1]++;
        }
        else
            answer+=result[i];
    }
    return answer;
}//앞 숫자가 9가 아니면 버려야함