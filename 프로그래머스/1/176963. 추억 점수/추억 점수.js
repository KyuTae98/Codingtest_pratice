function solution(name, yearning, photo) {
    var answer = [];
    const jumsu = name.reduce((sum,cur,index)=>{
       sum[cur] = yearning[index]
        return sum
    },{})
    photo.forEach((members)=>{
        let count = 0
        members.forEach((member)=>{
            if(jumsu[member])
                count+=jumsu[member];
        })
        answer.push(count)
    })
    return answer;
}