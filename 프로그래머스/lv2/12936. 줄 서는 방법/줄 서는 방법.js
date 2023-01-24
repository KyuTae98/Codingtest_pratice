function solution(n, k) {
    let answer = new Array(n).fill(1).map((_,i)=>_+i);
    let factorial = [1];
    let submit = [];
    for(let i=1;i<n;i++)
        factorial.push(factorial[i-1]*i);
    while(answer.length>0){
        if(k===1){
            submit=[...submit,...answer]
            break;
        }
        if(k===0){
            submit=[...submit,...answer.reverse()]
            break;
        }
        let factoNum = factorial[n-1];
        let new_num = Math.floor(k/factoNum);
        if(k%factoNum==0)
            new_num--;
        submit.push(answer[new_num]);
        answer.splice(new_num,1);
        k%=factoNum;
        n--;
    }
    return submit;
}
//k번째 순서 출력
//나머지 1은 첫번째 0은 마지막 