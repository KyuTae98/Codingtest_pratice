function solution(board) {
    let first = [0,0];
    let second = [0,0];
    let checkBingo = (arr) =>{
        let flag = 1;
        for(let i=0;i<3;i++){
            if(!(arr[i].includes(0)))//가로
                return true
            for(let j=0;j<3;j++)//세로
                if(arr[j][i]===0)
                    flag=0;
            if(flag===1)
                return true;
            flag=1;
        }
        if(arr[1][1]===1){//대각선
            if((arr[0][0]===1&&arr[2][2]===1)||(arr[2][0]===1&&arr[0][2]))
                return true
        }
        return false
    }
    let O = Array.from(Array(3), ()=>new Array(3).fill(0))
    let X = Array.from(Array(3), ()=>new Array(3).fill(0))
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]==='O'){
                first[0]++;
                O[i][j]=1;
            }
            else if(board[i][j]==='X'){
                second[0]++;
                X[i][j]=1;
            }
        }
    }
    if(checkBingo(O))
        first[1]=1;
    if(checkBingo(X))
        second[1]=1;
    let minus = first[0]-second[0]//0아니면 1
    if((!(minus===0||minus===1))||(first[1]===1&&minus!==1)||(second[1]===1&&minus!==0))
        return 0;
    return 1;
}
//1. O가 X보다 같거나 1많아야함