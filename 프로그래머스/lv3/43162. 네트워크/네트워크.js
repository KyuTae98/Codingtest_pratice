function solution(n, computers) {
    var answer = 0;
    let checkNetwork = (i,root) =>{
        for(let j=0;j<n;j++){
            if(computers[i][j]===1){
                computers[i][j]='V';
                computers[j][i]='V';
                checkNetwork(j,1);
                if(root===0)
                    answer++;
            }
        }
    }
    for(let i=0;i<n;i++){
        computers[i][i]=0;
        if(computers[i].includes(1))
            checkNetwork(i,0)
        else if(!computers[i].includes('V'))
            answer++;
    }
    return answer;
}