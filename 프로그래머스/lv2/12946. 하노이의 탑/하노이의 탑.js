function solution(n) {
    var answer = [];
    let HanoiTop = (n,s,m,e) =>{
        if(n===1) answer.push([s,e])
        
        else{
            HanoiTop(n-1,s,e,m);
            answer.push([s,e]);
            HanoiTop(n-1,m,s,e);
        }
    }
    HanoiTop(n,1,2,3);
    return answer;
}