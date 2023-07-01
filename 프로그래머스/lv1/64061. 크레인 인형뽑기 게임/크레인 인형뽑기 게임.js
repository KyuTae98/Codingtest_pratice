function solution(board, moves) {
    var answer = 0;
    let stack = []
    const findDoll = (index) =>{
        for(let i=0;i<board.length;i++){
            if(board[i][index]!==0){
                let return_value = board[i][index];
                board[i][index] = 0;
                return return_value
            }
        }
        return 0;
    }
    for (let i of moves){
        let doll = findDoll(i-1)
        if(doll===0)
            continue
        if(stack.at(-1)!==doll){
            stack.push(doll)
        }else{
            stack.pop()
            answer+=2;
        }
    }
    return answer;
}