function solution(numbers, k) {
    let index = (2*(k-1))%numbers.length;
    return numbers[index];
}
/*
0 2 4 6 ->

*/