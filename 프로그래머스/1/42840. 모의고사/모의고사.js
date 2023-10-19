function solution(answers) {
    let answer = [];
    let stu = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    let count = [[1,0],[2,0],[3,0]]
    let index = 0;
    for(let i=0;i<stu.length;i++){
        index = 0;
        for(let j=0;j<answers.length;j++){
            if(stu[i][index]===answers[j])
                count[i][1]++;
            index=(index+1)%stu[i].length
        }
    }
    count.sort((a,b)=>b[1]-a[1])
    for(let i=0;i<count.length;i++)
        if(count[0][1]===count[i][1])
            answer.push(count[i][0])
    return answer;
}
/*
1번 12345
2번 21232425
3번 3311224455
*/