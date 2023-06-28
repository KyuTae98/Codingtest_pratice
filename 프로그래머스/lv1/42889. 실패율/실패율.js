function solution(N, stages) {
    var answer = [];
    let result = []
    for(let i = 1;i<=N;i++){
        const cur_member = stages.filter(element=>element===i).length;
        const fur_member = stages.filter(element=>element>=i).length;
        answer.push([cur_member/fur_member,i])
    }
    answer.sort((a,b)=>b[0]-a[0])
    for([value,index] of answer){
        result.push(index)
    }
    return result;
}