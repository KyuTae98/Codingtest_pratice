function solution(picks, minerals) {
    let answer = 0;
    let result = [];
    let sum = picks.reduce((curr,sum)=>curr+sum);
    if(minerals.length>sum*5)
        minerals = minerals.slice(0,sum*5);
    
    for(let i=0;i<minerals.length;i+=5){
        let new_result = [0,0,0];
        for(let j=i;(j<i+5&&j<minerals.length);j++){
            if(minerals[j]==="diamond")
                new_result[0]++;
            else if(minerals[j]==="iron")
                new_result[1]++;
            else
                new_result[2]++;
        }
        result.push(new_result)
    }
    result.sort((a,b)=>{
        if(a[0]>b[0])
            return -1;
        else if(a[0]===b[0])
            if(a[1]>b[1])
                return -1;
            else if(a[1]===b[1])
                if(a[2]>b[2])
                    return -1;
        return 1
    });
    for(let element of result){
        if(picks[0]>0){
            answer+=element.reduce((curr,sum)=>curr+sum);
            picks[0]--;
        }
        else if(picks[1]>0){
            answer+=element[0]*5+element[1]+element[2]
            picks[1]--;
        }
        else if(picks[2]>0){
            answer+=element[0]*25+element[1]*5+element[2]
            picks[0]--;
        }
        else
            break;
    }
    return answer;
}

//한번 사용할 때 5번
//사용할 곡괭이가 없을 때까지 사용