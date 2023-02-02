function solution(n,a,b){
    var answer = 1;
    let max = a>b?a:b;
    let min = a>b?b:a;
    while(!(max-min===1&&max%2===0)){
        max=Math.ceil(max/2);
        min=Math.ceil(min/2);
        answer++
    }
    return answer
}
//짝수가 홀수보다 커야함