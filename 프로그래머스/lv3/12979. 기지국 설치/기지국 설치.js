function solution(n, stations, w) {
    let answer = 0;
    let range = 2*w+1
    let start = 1;
    let end = 0;
    for(let element of stations){
        end = element-w;
        answer+=Math.ceil((end-start)/range);
        start = element+w+1;
    }
    answer+=Math.ceil(((n+1)-start)/range);
    
    return answer;
}
//2n+1