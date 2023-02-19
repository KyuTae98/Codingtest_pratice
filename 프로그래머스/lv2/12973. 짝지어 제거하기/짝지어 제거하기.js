function solution(s){
    var answer = [];
    for(let i of s){
        if(answer[answer.length-1]===i){
            answer.pop();
        }else{
            answer.push(i);
        }
    }
    return answer.length>0?0:1;
}
//스택 사용