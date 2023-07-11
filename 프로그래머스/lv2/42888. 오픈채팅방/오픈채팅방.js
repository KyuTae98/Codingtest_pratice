function solution(record) {
    var answer = [];
    let user = {};
    const enter_member = "님이 들어왔습니다."
    const leave_member = "님이 나갔습니다." 
    for(let i = 0;i<record.length;i++){
        let member = record[i].split(" ")
        if(member[0]==="Change"||member[0]==="Enter")
            user[member[1]] = member[2]
    }
    for(let i = 0;i<record.length;i++){
        let member = record[i].split(" ")
        if(member[0]==="Enter")
            answer.push(user[member[1]]+enter_member)
        else if(member[0]==="Leave")
            answer.push(user[member[1]]+leave_member)
    }
    return answer;
}
//최종적으로 어떻게 변하는지
//