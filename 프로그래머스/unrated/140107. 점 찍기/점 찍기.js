function solution(k, d) {
    var answer = 0;
    let x=0;
    let y=Math.floor(d/k)*k;
    while(x<=d){
        if(Math.pow(x,2)+Math.pow(y,2)<=Math.pow(d,2)){
            answer += Math.floor((y/k))+1;
            x+=k;
        }
        else{
            y-=k;
        }
    }
    return answer;
}

//거리 계산하기 
//반복문으로 계산하기
