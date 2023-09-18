function solution(n, left, right) {
    let answer = [];
    for(let i = left;i<=right;i++){
        let share = (i/n>>0)+1;//몫
        let remain = (i%n)+1;//나머지
        if(share>=remain)
            answer.push(share)
        else
            answer.push(remain)
    }
    return answer;
}
/*
1234 0
2234 1
3334 2
4444 3

123 223 333 (2, 5 3223)
1234 2234 3334 4444 (7, 14 4 3334 444)

*/