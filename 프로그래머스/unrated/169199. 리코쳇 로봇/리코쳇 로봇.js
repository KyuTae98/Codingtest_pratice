function solution(board) {
    let answer = 0;
    let count = 0;
    board = board.map(ele=>[...ele])
    const findR = () =>{
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(board[i][j]==='R')
                    return [i,j]
            }
        }
    }
    let findD = [findR()];
    
    while(findD.length>0){
        let new_findD = [];
        for(let j=0;j<findD.length;j++){
            let [x,y] = findD[j];
            for(let i=x;i<board.length;i++){//상
                if(i+1===board.length||board[i+1][y]==='D'){
                    if(board[i][y]==='.'){
                        new_findD.push([i,y]);
                        board[i][y] = 'R'
                    }
                    else if(board[i][y]==='G')
                        return count+1;
                    break;
                }
            }
            for(let i=x;i>=0;i--){//하
                if(i===0||board[i-1][y]==='D'){
                    if(board[i][y]==='.'){
                        new_findD.push([i,y]);
                        board[i][y] = 'R'
                    }
                    else if(board[i][y]==='G')
                        return count+1;
                    break;
                }
            }
            
            for(let i=y;i<board[0].length;i++){//우
                if(i+1===board[0].length||board[x][i+1]==='D'){
                    if(board[x][i]==='.'){
                        new_findD.push([x,i]);
                        board[x][i] = 'R'
                    }
                    else if(board[x][i]==='G')
                        return count+1;
                    break;
                }
            }
            
            for(let i=y;i>=0;i--){//좌
                if(i===0||board[x][i-1]==='D'){
                    if(board[x][i]==='.'){
                        new_findD.push([x,i]);
                        board[x][i] = 'R'
                    }
                    else if(board[x][i]==='G')
                        return count+1;
                    break;
                }
            }
        }
        findD = new_findD;
        count++;
    }
    return -1;
}