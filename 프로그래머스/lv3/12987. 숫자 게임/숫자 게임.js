function solution(A, B) {
    var answer = 0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>a-b);
    let check = 0;
    for(let i=0;i<A.length;i++){
        if(A[check]<B[i]){
            answer++;
            check++;
        }
    }
    return answer;
}
//A팀은 고정 B팀은 자유자재로 나올 수 있는 가장 큰 값
//값보다 크면서 가장 작은값 찾기? -> 작은 차이로 이기는게 효율적이다. 
//1 3 5 8
//2 2 5 8 ->지면 얘만 넘어간다.
//

