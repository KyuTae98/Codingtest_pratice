function solution(n) {
    var answer = [];
    while(n>0){
        let quo = Math.floor(n/3);
        let rem = n%3;
        if(rem===0){
            answer.push(4)
            quo--;
        }
        else{
            answer.push(rem)
        }
        n=quo;
    }
    return answer.reverse().join("");
}
//1 2 4의 나라 -> 수학적 풀이
//몫과 나머지 이용하기