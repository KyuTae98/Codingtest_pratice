function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    let checkNum = (arr,lastIndex) => {//택배를 보내거나 수거하는 함수
        let check = 0;
        let last = 0;
        for(let i=lastIndex-1;i>=0;i--){
            if(arr[i]!==0){
                if(last<i+1)
                    last=i+1
                if(check+arr[i]<cap){
                    check+=arr[i];
                    arr[i]=0;
                }
                else if(check+arr[i]>=cap){
                    arr[i] -= (cap-check);
                    return last;
                }
            }
        }
        return last;
    }

    let lastDel = checkNum(deliveries,n);
    let lastPic = checkNum(pickups,n);
    while(lastDel!==0||lastPic!==0){
        if(lastPic>lastDel)
            answer+=lastPic*2;
        else
            answer+=lastDel*2;
        lastDel = checkNum(deliveries,lastDel);
        lastPic = checkNum(pickups,lastPic);
    }
    return answer;
}
//배달할 집과 수거할 집 분리 기준
//왔다리 갔다리 해야함, 배열에서 0보다 큰수를 먹는다. 
//전부 0일 경우 반복문 종료