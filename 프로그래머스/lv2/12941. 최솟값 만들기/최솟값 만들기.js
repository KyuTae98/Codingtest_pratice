function solution(A,B){
    var answer = 0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a)
    for (let i=0;i<A.length;i++){
        answer+=A[i]*B[i]
    }
    return answer;
}

//각 배열은 A,B 자연수로 두개
//최소가 되는값 return
//1. 일일이 다구하기
//2. 수학적 공식이 있을까? 