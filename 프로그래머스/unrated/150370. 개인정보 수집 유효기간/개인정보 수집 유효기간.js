function solution(today, terms, privacies) {
    var answer = [];
    today = today.split(".");
    today = today.map(element=>Number(element))
    const findTerms = (pri) =>{
        for(let i =0;i<terms.length;i++)
            if(terms[i][0]===pri)
                return Number(terms[i][1])
    }
    for(let i=0;i<terms.length;i++)
        terms[i] = terms[i].split(" ");
    for(let i=0;i<privacies.length;i++){
        privacies[i] = privacies[i].split(" ")
        let step = findTerms(privacies[i][1])
        privacies[i][0] = privacies[i][0].split(".")
        privacies[i][0] = privacies[i][0].map(element=>Number(element))
        privacies[i][0][1] += step
        privacies[i][0][2] -= 1
        if(privacies[i][0][2]===0){
            privacies[i][0][2] = 28;
            privacies[i][0][1] -= 1;
        }
        if(privacies[i][0][1]>12){
            privacies[i][0][0]+=Math.floor(privacies[i][0][1]/12)
            privacies[i][0][1]=privacies[i][0][1]%12;
            if(privacies[i][0][1]===0){
                privacies[i][0][0]-=1
                privacies[i][0][1]=12;  
            }
        }
        if(privacies[i][0][0]<today[0])
            answer.push(i+1)
        else if(privacies[i][0][0]===today[0])
            if(privacies[i][0][1]<today[1])
                answer.push(i+1)
            else if(privacies[i][0][1]===today[1])
                if(privacies[i][0][2]<today[2])
                    answer.push(i+1)
    }
    return answer;
}
//모든 달은 28일까지 있다고 가정합니다.
//파기해야 할 개인정보 번호 return 