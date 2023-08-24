function solution(operations) {
    var answer = [];
    for(let i=0;i<operations.length;i++){
        let [command,number] = operations[i].split(" ")
        if(command==="I")
            answer.push(Number(number))
        else{
            if(number==="1")
                answer.pop()
            else
                answer.shift()
        }
        answer.sort((a,b)=>{
            if(a>b)
                return 1
            return -1
        })
    }
    return answer.length===0?[0,0]:[answer[answer.length-1],answer[0]];
}
//하나의 큐에 이중으로 우선순위큐 사용하기,,,,