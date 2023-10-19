function solution(n) {
    var answer = 0;
    n = n.toString(3).split("");
    for(let i=0;i<n.length;i++)
        answer+=Number(n[i])*3**i;
    return answer;
}