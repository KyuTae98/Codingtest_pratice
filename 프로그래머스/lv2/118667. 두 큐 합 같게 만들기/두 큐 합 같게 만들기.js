function solution(queue1, queue2) {
    let answer = [];
    const len = queue1.length*2;
    const sum = queue1.reduce((a,b)=>a+b)+queue2.reduce((a,b)=>a+b)
    let queue3 = [...queue1,...queue2]
    let queue4 = [...queue2,...queue1]
    const twoQueueSumEqual = (queue) =>{
        let start = 0;
        let end = 0;
        let count = 0;
        do{
            count+=queue[end]
            while(count>sum/2){
                count-=queue[start]
                start = (start+1)%len
            }
            if(count===sum/2){
                if(start<end&&end<len/2){
                    if(end===len/2-1)
                        answer.push(start)
                    else
                        answer.push(len/2+start*2+(end-start+1))
                }
                else if(start<len/2&&end>=len/2)
                    answer.push(start+end-len/2+1)
                else if(start===end){
                    if(start===len/2-1)
                        answer.push(start)
                    else
                        answer.push(len/2+start*2+1)
                }
            }
            end=(end+1)%len
        }while(end!==0);
    }
    twoQueueSumEqual(queue3)
    twoQueueSumEqual(queue4)
    answer.sort((a,b)=>{
        if(a>b)
            return 1
        return -1
    })
    return answer.length===0?-1:answer[0];
}