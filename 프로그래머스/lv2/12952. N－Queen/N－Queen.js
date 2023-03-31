function solution(n) {
    let answer = 0;
    const arr = new Array(n).fill();
    const checking = (num) =>{
        for(let i=0;i<num;i++){
            if(arr[i]===arr[num])
                return false;
            if(Math.abs(num-i)===Math.abs(arr[num]-arr[i]))
                return false;
        }
        return true
    }
    const DFS = (num) =>{
        if(num===n){
            answer++;
            return;
        }
        for(let i=0;i<n;i++){
            arr[num]=i;
            if(checking(num))
                DFS(num+1)
        }
    }
    DFS(0)
    return answer;
}
//대각선 기울기...
//0,2 1,3 2,4