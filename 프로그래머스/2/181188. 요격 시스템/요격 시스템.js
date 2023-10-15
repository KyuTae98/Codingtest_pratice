function solution(targets) {
    let answer = 0;
    let r = [0,0];
    targets.sort((a,b)=>a[0]-b[0]);
    for(let i=0;i<targets.length;i++){
        let [r1, r2] = r;
        let [cur_t1, cur_t2] = targets[i];
        if(r1<=cur_t1&&r2>cur_t1){//target의 시작을 기준
            if(cur_t2>r2)
                r = [cur_t1,r2];
            else
                r = [cur_t1,cur_t2]
        }
        else{
            r = targets[i]
            answer++;
        }
    }
    return answer;
}
/*
정수가 아니어도 요격가능
*/