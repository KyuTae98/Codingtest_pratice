function solution(s) {
    let answer = 1;
    let stand = s[0];
    let count = [0,0];
    for(let i=0;i<s.length-1;i++){
        if(stand===s[i])
            count[0]++;
        else
            count[1]++;
        if(count[0]===count[1]){
            answer++;
            count=[0,0]
            stand = s[i+1]
        }
    }
    return answer;
}