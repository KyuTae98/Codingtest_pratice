function solution(d, budget) {
    let answer = 0;
    d.sort((a,b)=>{
        if(a>b)
            return 1;
        return -1
    })
    for(let i=0;i<d.length;i++){
        budget-=d[i];
        if(budget<0)
            break
        answer++
    }
    return answer;
}

//최대한 많은 부서 무조건 DP로 해결이 best
//budget수 만들기 1 2 3 4 5