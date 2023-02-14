function solution(book_time) {
    var answer = [];
    let count = 0;
    let clock = (num) =>{
        let test = num%100;
        if(test>=60){
            num+=100;
            num-=60;
        }
        return num;
    }
    book_time = book_time.map(element=>[Number(element[0].slice(0,2)+element[0].slice(3,5)),Number(element[1].slice(0,2)+element[1].slice(3,5))]).sort((a,b)=>a[0]-b[0]);
    book_time.forEach(element=>{
        let check=0;
        for(let i =0;i<answer.length;i++){
            if(clock(answer[i][1]+10)<=element[0]){
                answer[i]=element;
                check=1;
                break;
            }
        }
        if(check===0)
            answer.push(element)
    })
    return answer.length;
}
//최소한의 객실만을 사용하여 예약손님을 받는다.