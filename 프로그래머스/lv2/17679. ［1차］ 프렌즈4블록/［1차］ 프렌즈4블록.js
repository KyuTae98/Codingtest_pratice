function solution(m, n, board) {
    var answer = 0;
    let count = 0;
    let check = 0;
    let remove = []
    board = board.map(element=>element.split(""))
    while(check===0){
        check = 1
        for(let i=0;i<m-1;i++){
            for(let j=0;j<n-1;j++){
                let standard = board[i][j]
                if(standard!==0&&standard===board[i][j+1]&&standard===board[i+1][j]&&standard===board[i+1][j+1]){                       check=0;
                    remove.push([i,j])
                    remove.push([i,j+1])
                    remove.push([i+1,j])
                    remove.push([i+1,j+1])
                }
            }
        }
        
        for(let [i,j] of remove)
            board[i][j]=0;
        for(let i=m-1;i>0;i--){
            for(let j=0;j<n;j++){
                if(board[i][j]===0){
                    let hei = i;
                    while(hei>=0&&board[hei][j]===0)
                        hei--;
                    if(hei<0)
                        continue;
                    else{
                        let tmp = board[hei][j];
                        board[hei][j] = board[i][j]
                        board[i][j] = tmp
                    }
                }
            }
        }
        remove = []
    }
    for(let i=0;i<m;i++)
        for(let j=0;j<n;j++)
            if(board[i][j]===0)
                count++
    return count;
}