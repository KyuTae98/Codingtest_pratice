function solution(sides) {
    var answer = 0;
    let min = Math.min.apply(null,sides)
    return (2*min)-1;
}