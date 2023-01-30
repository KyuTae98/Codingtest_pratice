function solution(people, limit) {
    var answer = 0;
    let load = 0;
    let count = 0;
    people.sort((a,b)=>a-b);
    for(let i=0;i<people.length;i++){
        let current = people[i];
        if(current>Math.floor(limit/2)){//반 초과 무게 있을때
            answer+=people.length-i;
            break;
        }
        else if(people.slice(i+1,people.length).includes(limit-current)){//limit에 딱 맞는 수가 있을경우
            answer++;
            people.splice(i,1);
            people.splice(people.indexOf(limit-current),1);
            i--;
        }
        else if(load+current<=limit){
            load+=current;
            count++;
        }
        if(count===2){
            load=0;
            count=0;
            answer++;
        }
        
    }
    return answer+count;
}
//인원제한... 2명