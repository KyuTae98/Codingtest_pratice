function solution(msg) {
    let words = [];
    let result = [];
    msg = msg+'a';
    for(let i=0;i<msg.length-1;i++){
        let word = msg[i]+msg[i+1];
        let count = i+2;
        while(words.includes(word)){
            word +=msg[count];
            i++;
            count++;
        }
        if(word.length===2)
            result.push(word.charCodeAt(0)-'A'.charCodeAt(0)+1);
        else
            result.push(words.indexOf(word.slice(0,word.length-1))+27);
        words.push(word)
    }
    return result;
}
//사전에서 일치하는 가장긴 문자열 선택
//false일때까지 반복문 돌리기 charCodeAt
//문자열에 undefinde를 없에기