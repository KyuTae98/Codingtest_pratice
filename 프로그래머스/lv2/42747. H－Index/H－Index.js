function solution(citations) {
    let answer = 0;
    let n = citations.length
    citations.sort((a,b)=>{
        if (b>a)
            return 1
        return -1
    })
    for(let i=0;i<citations.length;i++){
        let min = n - (i+1);//나머지 논문
        if(citations[i]>=i+1&&min<=i+1)
            answer = i+1
    }
    return answer;
}
//h번 이상 인용된 논문 h편 이상, 나머지 논문이 h번 이하
//h번 이상 -> i+1 = h