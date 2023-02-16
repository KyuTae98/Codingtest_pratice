function solution(arr) {
    var answer = arr.reduce((cur,val)=>cur+val)/arr.length;
    return answer;
}