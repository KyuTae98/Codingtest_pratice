function solution(s) {
    var answer = [];
    const standard = "a".charCodeAt([0]);
    const count = new Array(26).fill(0);
    for (let i=0;i<s.length;i++){
        let diff = s.charCodeAt([i])-standard;
        if(count[diff] === 0){
            answer.push(-1);
            count[diff]=1;
        }
        else {
            for(let j=i-1;j>=0;j--){
                let diff1 = s.charCodeAt([j])-standard;
                if(diff===diff1){
                    answer.push(i-j);
                    break;
                }
            }
        }
    }
    return answer;
}

//왼쪽부터 오른쪽으로 읽는다. 
//처음나오면 -1 처음이 아니면 몇칸앞에 있는지 표시
//1. 하나씩 다 확인하기
//2. 아스키 코드(charCodeAt)를 이용한 하나씩 세기 -> check하는 방식으로?
