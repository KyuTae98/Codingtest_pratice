function solution(dartResult) {
    var answer = 0;
    let scores = []
    for (let i=0;i<dartResult.length;i++){
        if(Number(dartResult[i])>=0){
            let new_score = 0;
            while(Number(dartResult[i])>=0){
                new_score*=10;
                new_score+=Number(dartResult[i++])
            }
            i--
            scores.push(new_score)
        }else{
            if(dartResult[i]==='D')
                scores[scores.length-1]**=2
            else if(dartResult[i]==='T')
                scores[scores.length-1]**=3
            else if(dartResult[i]==='#')
                scores[scores.length-1]*=-1
            else if(dartResult[i]==='*'){
                scores[scores.length-1]*=2
                if(scores[scores.length-2])
                    scores[scores.length-2]*=2
            }
        }
    }
    scores.forEach(element=>answer+=element)   
    return answer;
}

//점수가 3개 