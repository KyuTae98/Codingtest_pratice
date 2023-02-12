function solution(dirs) {
    var answer = [];
    let coor = [0,0];
    for(let i in dirs){
        let str = dirs[i];
        let start = coor.join();
        if(str==='L'){
            if(coor[1]-1<-5)
                continue;
            coor[1]-=1
        }
        else if(str==='R'){
            if(coor[1]+1>5)
                continue;
            coor[1]+=1;
        }
        else if(str==='D'){
            if(coor[0]-1<-5)
                continue;
            coor[0]-=1;
        }
        else if(str==='U'){
            if(coor[0]+1>5)
                continue;
            coor[0]+=1;
        }
        let end = coor.join();
        if(!(answer.includes(start+end)||answer.includes(end+start)))
            answer.push(start+end);
    }
    return answer.length;
}
//처음 방문한 길이 그렇다면 방문했다는것을 어떻게 알까? 
//1. 문자열로 만들어서 저장한다. ->반대도 생각해야 할까? 