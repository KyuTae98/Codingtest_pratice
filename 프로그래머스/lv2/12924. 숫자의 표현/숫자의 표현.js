function solution(n) {
    var answer = 0;
    for (let i = 1; i * (i - 1) / 2 < n; i++)
        if ((n - (i * (i - 1) / 2)) % i == 0) answer++;
    return answer;
}
//1 1
//2 1
//3 2

//4 1
//5 2
//6 2

//7 2
//8 2
//9 2
//15 4