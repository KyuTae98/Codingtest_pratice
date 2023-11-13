function solution(n, money) {
    let answer = new Array(n+1).fill().map(()=>0);
    answer[0] = 1;
    money.sort((a,b)=>a-b)
    for(let i=0;i<money.length;i++){
        for(let j=money[i];j<=n;j++){
            answer[j] += answer[j-money[i]]
        }
    }
    return answer[n]%1000000007;
}


/*

*/