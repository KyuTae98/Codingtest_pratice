function solution(word) {
    var answer = 0;
    const plusFive = (num) =>{
        let result = 0;
        for(let i=0;i<num;i++)
            result+=5**i;
        return result;
    }
    let dic = ['A','E','I','O','U'];
    let i=0;
    while(i<word.length){
        let check = word[i];
        let position = dic.indexOf(check)
        answer+=(plusFive(5-i)*position)+1
        i++;
    }
    return answer;
}
//사전에서 몇번째 인지 확인하기
//자리수로 확인X
//781개 