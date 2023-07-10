function solution(n, t, m, p) {
    var answer = '';
    let numbers = '';
    let count = 0;
    while(numbers.length<t*m)
        numbers +=((count++).toString(n)).toUpperCase()
    for(let i=0;i<t;i++)
        answer+=numbers[(m*i)+p-1]
    return answer;
}
//진법 n 
//미리 구할 숫자의 수 t (튜브가 말해야 하는 수)
//게임에 참가하는 인원 m 
//튜브의 순서 p 
//2진법 10진법 16진법(0 부터 시작)

//1. t*m 까지 곱해서 구하기
//2. 알고리즘 고민해보기 