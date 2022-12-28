function solution(t, p) {
    var answer = 0;
    let standardLen = p.length;
    let standard = Number(p)
    let i = 0;
    while(i+standardLen<t.length+1){
        let result = t.slice(i,i+standardLen)
        if(Number(result)<=standard){
            answer++;
        }
        i++;
    }
    return answer;
}