function solution(k, dungeons) {
    var answer = [];
    let max = 0;
    let check = new Array(dungeons.length).fill(0);
    let DFS = () =>{
        for(let i=0;i<dungeons.length;i++){
            if(dungeons[i][0]<=k&&check[i]===0){
                k-=dungeons[i][1];
                check[i] = 1;
                answer.push(i);
                if(answer.length>max)
                    max=answer.length;
                DFS();
                check[i] = 0;
                k+=dungeons[i][1];
                answer.pop();
            }
        }
    }
    DFS();
    return max;
}