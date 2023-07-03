function solution(new_id) {
    var answer = '';
    var pattern1 = /[0-9]/; //숫자
    var pattern2 = /[a-zA-Z]/; //영어
    answer = new_id.toLowerCase();
    answer = [...answer]
    answer = answer.filter(element=>{
        if(element==='-'||element==='_'||element==='.'||pattern1.test(element)||pattern2.test(element))
            return element
    })
    answer = answer.join('')
    while(answer.includes('..')){
        answer = answer.split('..')
        answer = answer.join('.')
    }
    console.log(answer)
    if(answer[0]==='.')
        answer = answer.substr(1,answer.length)
    if(answer[answer.length-1]==='.')
        answer = answer.substr(0,answer.length-1)
    if(answer.length===0)
        answer+='aaa';
    else if(answer.length>=16){
        answer = answer.slice(0,15);
        if(answer[answer.length-1]==='.')
            answer = answer.substr(0,answer.length-1)
    }
    while(answer.length<=2){
        answer+=answer[answer.length-1]
    }
    return answer;
}
//알파벳, 숫자, -, _, . 제외 모든 문자 제거