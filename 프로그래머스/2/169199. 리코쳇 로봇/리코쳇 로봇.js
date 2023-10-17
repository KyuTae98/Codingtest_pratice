function solution(board) {
    const endR = board.length;
    const endC = board[0].length;
    const checkR = () =>{
        for(let i=0;i<endR;i++)
            for(let j=0;j<endC;j++)
                if(board[i][j]==='R')
                    return [i,j,0]
    }
    const checkE = (x,y) =>{
        if(board[x][y]==='E')
            return false
        board[x][y]='E'
        return true
    }
    const checkG = (x,y) => (board[x][y]==='G')
    const checkRight = (x,y) =>{
        for(let i=y;i<endC;i++){
            if(board[x][i]==='D')
                return i-1;
        }
        return endC-1;
    }
    const checkLeft = (x,y) =>{
        for(let i=y;i>=0;i--){
            if(board[x][i]==='D')
                return i+1;
        }
        return 0;
    }
    const checkUp = (x,y) =>{
        for(let i=x;i>=0;i--){
            if(board[i][y]==='D')
                return i+1;
        }
        return 0;
    }
    const checkDown = (x,y) =>{
        for(let i=x;i<endR;i++){
            if(board[i][y]==='D')
                return i-1;
        }
        return endR-1;
    }
    board = board.map(ele=>ele.split(""));
    let BFS = [checkR()];
    while(BFS.length>0){
        let [x,y,c] = BFS.shift();
        let r = checkRight(x,y);
        let l = checkLeft(x,y);
        let u = checkUp(x,y);
        let d = checkDown(x,y);
        if(checkG(x,r)||checkG(x,l)||checkG(u,y)||checkG(d,y))
            return c+1
        if(checkE(x,r))
            BFS.push([x,r,c+1])
        if(checkE(x,l))
            BFS.push([x,l,c+1])
        if(checkE(u,y))
            BFS.push([u,y,c+1])
        if(checkE(d,y))
            BFS.push([d,y,c+1])
    }
    return -1;
}
//E로 체크 D장애물 G