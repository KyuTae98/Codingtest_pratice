function solution(maps) {
    let row = maps.length;
    let column = maps[0].length
    let stack = [[0,0,1]];
    maps[0][0]=0;
    while(stack.length>0){
        let new_stack =[];
        for(let i of stack){
            let [x,y,count] = i;
            if(x===row-1&&y===column-1){
                console.log(1)
                return count;
            }
            if(x+1<row&&maps[x+1][y]===1){
                new_stack.push([x+1,y,count+1])
                maps[x+1][y]=0;
            }
            if(x-1>=0&&maps[x-1][y]===1){
                new_stack.push([x-1,y,count+1])
                maps[x-1][y]=0;
            }
            if(y+1<column&&maps[x][y+1]===1){
                new_stack.push([x,y+1,count+1])
                maps[x][y+1]=0;
            }
            if(y-1>=0&&maps[x][y-1]===1){
                new_stack.push([x,y-1,count+1])
                maps[x][y-1]=0;
            }
        }
        stack=new_stack;
    }
    return -1;
}
//BFS로 드가자
//상하좌우