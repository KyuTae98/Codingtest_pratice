function solution(tickets) {
    var answer = ["ICN"];//목적지만 넣어버리기, 
    let check = new Array(tickets.length).fill(0);
    tickets.sort((a,b)=>a[1]>b[1]?1:-1);
    let start = "ICN";
    let DFS = () =>{
        for(let i=0;i<tickets.length;i++){
            if(tickets[i][0]===start&&check[i]===0){   
                check[i]=1;
                answer.push(tickets[i][1]);
                start=tickets[i][1];
                if(!check.includes(0))
                    return;
                DFS();
                if(check.includes(0)){
                    check[i]=0;
                    answer.pop()
                    start = answer[answer.length-1]
                }
            }
        }
    }
    DFS();
    return answer;
}
//DFS 길이 없으면 뒤로 가야함,,,,  