function solution(n) {
    let answer = 0;
    let NQueen = new Array(n).fill();
    const checkNQuene = (index) =>{
        for(let i=0;i<index;i++)
            if(NQueen[i]===NQueen[index]||Math.abs(NQueen[i]-NQueen[index])===Math.abs(i-index))
                return false
        return true
    }
    const DFS = (index) =>{
        if(index===n)
            answer++;
        else
            for(let i=0;i<n;i++){
                NQueen[index] = i;
                if(checkNQuene(index))
                    DFS(index+1)
            }
    }
    DFS(0);
    return answer;
}