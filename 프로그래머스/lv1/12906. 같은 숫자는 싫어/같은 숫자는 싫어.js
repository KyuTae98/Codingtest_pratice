function solution(arr){
    let answer = [];
    let check;
    for(let i=0;i<arr.length;i++){
        if(answer.length===0||check!==arr[i]){
            answer.push(arr[i])
            check = arr[i]
        }
        
    }
    return answer;
}