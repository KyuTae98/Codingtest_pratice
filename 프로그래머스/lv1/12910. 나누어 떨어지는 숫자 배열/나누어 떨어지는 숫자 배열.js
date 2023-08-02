function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter(ele=>ele%divisor===0)
    answer.sort((a,b)=>{
        if(a>b)
            return 1
        return -1
    })
    return answer.length===0?[-1]:answer;
}