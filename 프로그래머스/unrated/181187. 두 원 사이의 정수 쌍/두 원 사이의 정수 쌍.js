function solution(r1, r2) {
    let answer=0;
    for(let i=1;i<=r2;i++){
        let y1 = Math.ceil(Math.sqrt((r1+i)*(r1-i)));
        let y2 = Math.floor(Math.sqrt((r2+i)*(r2-i)));
        if(r1>=i)
            answer+=y2-y1+1;
        else
            answer+=y2+1;
    }
    answer = answer*4
    return answer;
}
//원의 방정식을 이용한 계산.