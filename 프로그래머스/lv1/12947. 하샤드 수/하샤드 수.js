function solution(x) {
    let answer = true;
    let str =x.toString()
    let num = 0;
    for(const ele of str)
        num +=Number(ele)
    if(x%num!==0)
        answer=!answer
    return answer;
}