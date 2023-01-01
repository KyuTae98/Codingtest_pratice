function solution(s) {
    var answer = '';
    let arr = s.split(" ")
    arr = arr.map(element => (
        Number(element)
    ))
    let result = [Math.min.apply(null,arr),Math.max.apply(null,arr)]
    answer = result.join(" ")
    return answer;
}

//문자열에서 띄어쓰기로 구분