function solution(plans) {
    var answer = [];
    let stop_ass = [];
    const minus_time = (big,small) =>{
        if(big[0]<small[0]){
            big[0]--;
            big[1]+=60;
        }
        return (big[0]-small[0])*60+big[1]-small[1]
    }
    plans = plans.map(element=>{
        element[1] = element[1].split(":").map(time=>Number(time))
        element[2] = Number(element[2])
        return element
    })
    plans.sort((a,b)=> {
        if(a[1][0]<b[1][0]) 
            return -1
        else if(a[1][0]===b[1][0])
            if(a[1][1]<b[1][1])
                return -1
        else 
            return 1
    })
    for(let i=0;i<plans.length-1;i++){//끝나는 시간 계산하기 
        const minute = (plans[i][1][1] + plans[i][2])%60
        const hour = Math.floor((plans[i][1][1] + plans[i][2])/60) + plans[i][1][0]
        const end_time = [hour,minute]
        if((plans[i+1][1][0]<end_time[0])||((plans[i+1][1][0]===end_time[0])&&plans[i+1][1][1]<end_time[1]))
                stop_ass.push([plans[i][0],minus_time(end_time,plans[i+1][1])])
        else{
            answer.push(plans[i][0])
            let save_time = minus_time(plans[i+1][1],end_time)
            while(stop_ass.length>0&&(save_time>=stop_ass[stop_ass.length-1][1])){
                save_time-=stop_ass[stop_ass.length-1][1];
                answer.push(stop_ass.pop()[0])
            }
            if(stop_ass.length>0)
                stop_ass[stop_ass.length-1][1]-=save_time
        }
    }
    answer.push(plans[plans.length-1][0])
    for(let i=stop_ass.length-1;i>=0;i--)
        answer.push(stop_ass[i][0])
    return answer;
}
//

