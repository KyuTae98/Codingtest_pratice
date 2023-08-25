function solution(m, n, puddles) {
    let answer = new Array(n).fill().map(()=>new Array(m).fill(0));
    for(let i=0;i<puddles.length;i++){
        const [y,x] = puddles[i];
        answer[x-1][y-1] = 'X'
    }
    for(let i=0;i<n;i++){
        if(answer[i][0]==='X')
            while(i<n)
                answer[i++][0] = 'X';
        else
            answer[i][0] = 1;
    }
    for(let i=0;i<m;i++){
        if(answer[0][i]==='X')
            while(i<m)
                answer[0][i++] = 'X'
        else
            answer[0][i] = 1;
    }
    for(let i=1;i<n;i++){
        for(let j=1;j<m;j++){
            if(answer[i][j]==='X'||(answer[i-1][j]==='X'&&answer[i][j-1]==='X'))
                continue;
            if(answer[i-1][j]==='X')
                answer[i][j] = answer[i][j-1]%1000000007;
            else if(answer[i][j-1]==='X')
                answer[i][j] = answer[i-1][j]%1000000007;
            else
                answer[i][j] = (answer[i-1][j] + answer[i][j-1])%1000000007;   
        }
    }
    return answer[n-1][m-1]%1000000007;
}