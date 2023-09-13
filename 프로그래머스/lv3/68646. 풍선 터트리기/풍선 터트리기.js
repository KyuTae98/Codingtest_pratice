function solution(a) {
    let answer = 0;
    let min = a[0];
    for(let i=0;i<a.length;i++){
        if(min>a[i]){
            answer++;
            min = a[i]
        }
    }
    min = a[a.length-1];
    for(let i=a.length-1;i>=0;i--){
        if(min>a[i]){
            answer++;
            min = a[i]
        }
    }
    answer++
    return answer;
}
//첫번째 마지막이면 남은애랑 대결
//[-16,27,65,-2,58,-92,-71,-68,-33,-61]