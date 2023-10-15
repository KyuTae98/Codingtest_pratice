function solution(board) {
    const countCH = (ch) =>{
        let count = 0;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++)
                if(board[i][j]===ch)
                    count++
        }
        return count
    }
    const TicTac = (ch) =>{
        let count = 0;
        for(let i=0;i<3;i++){
            if(board[i][0]===ch&&board[i][1]===ch&&board[i][2]===ch)
                count++;
            if(board[0][i]===ch&&board[1][i]===ch&&board[2][i]===ch)
                count++;
        }
        if(board[0][0]===ch&&board[1][1]===ch&&board[2][2]===ch)
                count++;
        if(board[0][2]===ch&&board[1][1]===ch&&board[2][0]===ch)
                count++;
        return count;
    }
    let countO = countCH('O');
    let countX = countCH('X');
    let ticO = TicTac('O');
    let ticX = TicTac('X');
    if(!(countO===countX||countO===(countX+1)))//O보다X가 많을때
        return 0;
    else if(ticO>0&&ticX>0)//완성 횟수가 1보다 많을때
        return 0;
    else if((ticX===1&&countO>countX)||(ticO===1&&countO<=countX))
        return 0
    return 1;
}
//후공에서 끝냈는데 선공이랑 같을때