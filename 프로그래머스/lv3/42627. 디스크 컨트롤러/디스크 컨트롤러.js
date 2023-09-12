function solution(jobs) {
    let answer = 0;
    let length = jobs.length;
    let queue = [0];
    let time = 0;
    const swap = (queue,e1,e2) =>{
        let tmp = queue[e1]
        queue[e1] = queue[e2]
        queue[e2] = tmp
    }
    const pushQueue = (time,ele,queue) =>{
        queue.push(ele);
        let start = queue.length-1;
        let p = start / 2>>0;
        while(start>1&&((queue[start][1])<(queue[p][1]))){
            swap(queue,start,p)
            start = p;
            p = start / 2>>0;
        }
    }
    const setJob = (time,queue) => {
        while(jobs.length>0&&jobs[0][0]<=time)
            pushQueue(time,jobs.shift(),queue);    
    }
    const getJobs = (queue,time) =>{
        const ele = queue[1];
        swap(queue,1,queue.length-1);
        queue.pop()
        let start = 1;
        let left = start * 2;
        let right = start * 2 + 1;
        while(left<queue.length){
            if(right>=queue.length||(queue[left][1])<(queue[right][1])){
                if((queue[left][1])<(queue[start][1])){
                    swap(queue,start,left)
                    start = left;
                }
                else break
            }
            else{
                if((queue[right][1])<(queue[start][1])){
                    swap(queue,start,right)
                    start = right
                }
                else break
            }
            left = start * 2;
            right = start * 2 + 1;
        }
        return ele;
    }
    jobs.sort((a,b)=>a[0]-b[0]);
    time = jobs[0][0]
    setJob(time,queue)
    while(queue.length>1){
        let [s,t] = getJobs(queue,time)
        time += t;
        answer += time-s;
        setJob(time,queue)
        if(jobs.length>0&&queue.length===1){
            time = jobs[0][0];
            setJob(time,queue)
        }
    }
    return answer/length>>0;
}
//요청부터 종료까지 시간이 짧은 순으로