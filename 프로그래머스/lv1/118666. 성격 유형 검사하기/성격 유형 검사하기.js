function solution(survey, choices) {
    var answer = [];
    let result = [{
            R:0,T:0
        },{
            C:0,F:0
        },{
            J:0,M:0
        },{
            A:0,N:0
        }]
    for (let i =0;i < survey.length;i++){
        let score = choices[i]-4;
        result.forEach(element=>{
            if(Object.keys(element).includes(survey[i][0])){
                if(score>0)
                    element[survey[i][1]] +=score;
                else if(score<0)
                    element[survey[i][0]] +=Math.abs(score);
                }
        })
    }
    result.forEach(element=>{
        if(Object.values(element)[0]<Object.values(element)[1])
            answer.push(Object.keys(element)[1])
        else
            answer.push(Object.keys(element)[0])
    })
    answer = answer.join("")
    console.log(answer)
    return answer;
}

//성격유형 4개의 지표 총 16가지 
//매우 - 3 그냥 - 2 약간 - 1
/*
RT - 1번
CF - 2번
JM - 3번
AN - 4번
*/