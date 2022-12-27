function solution(A, B) {
    var answer = 0;
    let countdown = A.length;
    let count = 0;
    while(countdown>-1){
        if(A===B)
            return count;
        let last = A[A.length-1];
        A = [...A]
        for (let i = A.length-1;i>0;i--){
            A[i] = A[i-1];
        }
        A[0]=last;
        A = A.join("")
        countdown--;
        count++;
        if(A===B)
            return count;
    }
    return -1;
}