function solution(priorities, location) {
    var answer = 1;
    let max = Math.max.apply(null,priorities)
    let currloca = priorities.indexOf(max)
    while(currloca!==location || max!==priorities[location]){
        if(max===priorities[currloca]){
            if(currloca<location)
                location--;
            priorities.splice(currloca,1)
            max = Math.max.apply(null,priorities)
            currloca--;
            answer++;
        }
        currloca = (currloca+1)%priorities.length;
    }
    return answer;
}

//우선순위로 출력한다.
//우선순위보다 낮다면 뒤로 보낸다. 
//실제로 뒤로 보내면 어떤 숫자인지 알지 못한다. 가장 큰 숫자부터 시작한다. max이렇게 찾으면 앞에 있는게 나간다. 
