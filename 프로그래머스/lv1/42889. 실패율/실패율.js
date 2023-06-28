function solution(N, stages) {
    var answer = [];
    for(let i = 1;i<=N;i++){
        const cur_member = stages.filter(element=>element===i).length;
        const fur_member = stages.filter(element=>element>=i).length;
        answer.push([cur_member/fur_member,i])
    }
    answer.sort((a,b)=>b[0]-a[0])
    return answer.map(ele=>ele[1]);
}