function solution(n) {
    var answer = 0;
    let fibonachi = [0n,1n]
    for(let i=2;i<=n;i++)
        fibonachi.push(fibonachi[i-1]+fibonachi[i-2])
    
    return fibonachi[n]%1234567n;
}