function solution(k, ranges) {
    let answer = [0];
    while(k!==1){
        if(k%2===1){
            answer.push((k+k*3+1)/2+answer.at(-1))
            k = k*3 + 1
        }
        else{
            answer.push((k*3)/4+answer.at(-1))
            k /= 2
        }
    }
    return ranges.map(([f,s])=>{
        if(answer.length-1+s<f) return -1
        return answer.at(s-1)-answer[f]
    });
}