function solution(routes) {
    let answer = 0;
    let ran = [0,0]
    routes.sort((a,b)=>{
        if(a[0]>b[0])
            return 1
        return -1
    })
    for(let i=0;i<routes.length;i++){
        let [lan1,lan2] = ran;
        let [x1,x2] = routes[i];
        if(lan1<=x1&&lan2>=x1){
            if(lan2<=x2)
                ran = [x1,lan2]
            else
                ran = [x1,x2]
        }
        else{
            ran = routes[i]
            answer++
        }
    }
    return answer;
}