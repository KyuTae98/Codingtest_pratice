function solution(maps) {
    let answer = [];
    let count = 0;
    let row = maps.length;
    let column = maps[0].length;
    let stack = [];
    let check = 0;
    maps=maps.map(element=>[...element])
    let checkDFS = (I,J) =>{
        stack.push([I,J])
        count += Number(maps[I][J])
        maps[I][J] = 'X';
    }
    let DFS = (i,j) =>{
        checkDFS(i,j);
        while(stack.length>0){
            let [I,J] = stack.shift();
            if(I-1>=0&&maps[I-1][J]!=='X')
                checkDFS(I-1,J)
            if(J-1>=0&&maps[I][J-1]!=='X')
                checkDFS(I,J-1)
            if(I+1<row&&maps[I+1][J]!=='X')
                checkDFS(I+1,J)
            if(J+1<column&&maps[I][J+1]!=='X')
                checkDFS(I,J+1)
        }
        answer.push(count);
        count=0;
        stack = [];
    }
    for(let i=0;i<row;i++)
        for(let j=0;j<column;j++)
            if(maps[i][j]!=='X'){
                DFS(i,j)
                check=1;
            }
    if(check===0)
        return [-1]
    return answer.sort((a,b)=>a-b);
}
//DFS사용 해보기 상하좌우