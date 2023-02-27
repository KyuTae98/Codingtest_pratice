function solution(n, s) {
    if(s/n<1)
        return [-1]
    let answer = new Array(n).fill(Math.floor(s/n));
    if(s%n!==0){
        for(let i=n-1;i>n-1-s%n;i--)
            answer[i]++;
    }
    return answer
}
//원소들의 차이가 가장 적게 나누기
//n개로 나누기 
//8 3 - 2 3 3