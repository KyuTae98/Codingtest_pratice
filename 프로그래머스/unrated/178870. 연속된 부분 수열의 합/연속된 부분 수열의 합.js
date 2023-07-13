function solution(sequence, k) {
    var answer = [];
    let count = 0;
    let start = 0;
    for(let i=0;i<sequence.length;i++){
        count+=sequence[i];
        while(count>k)
            count -=sequence[start++]
        if(count===k)
            answer.push([start,i])
    }
    answer.sort((a,b)=>{
        if((a[1]-a[0])<(b[1]-b[0]))
            return -1
        else
            return 1
    })
    return answer[0];
}
//부분 수열의 합은 k
//k가 여러개이면 길이가 짧은 수열
//k이며 길이가 같을 경우 앞쪽에 나오는 수열