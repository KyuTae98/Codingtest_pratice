function solution(maps) {
    var answer = 0;
    let column = maps.length;
    let row = maps[0].length;
    maps = maps.map(element=>[...element])
    let quest = (str) =>{
        for(let i=0;i<column;i++)
            for(let j=0;j<row;j++)
                if(maps[i][j]===str)
                    return [i,j]
    }
    let BFS = (begin,finish) =>{
        let arr = [[begin[0],begin[1],0]];
        let checking = maps.map(element=>[...element]);
        checking[begin[0]][begin[1]]='X'
        let [fx,fy] = finish;
        while(arr.length>0){
            let new_arr = []
            
            for(let element of arr){
                let [x,y,c] = element;
                if(fx===x&&fy===y)
                    return c;
                if(x+1<column&&checking[x+1][y]!=='X'){
                    new_arr.push([x+1,y,c+1]);
                    checking[x+1][y]='X'
                }
                if(x-1>=0&&checking[x-1][y]!=='X'){
                    new_arr.push([x-1,y,c+1]);
                    checking[x-1][y]='X'
                }
                if(y+1<row&&checking[x][y+1]!=='X'){
                    new_arr.push([x,y+1,c+1]);
                    checking[x][y+1]='X'
                }
                if(y-1>=0&&checking[x][y-1]!=='X'){
                    new_arr.push([x,y-1,c+1])
                    checking[x][y-1]='X'
                }
            }
            
            arr=new_arr;
        }
        return -1
    }
    let start = quest('S');
    let loop = quest('L');
    let end = quest('E');
    let case1 = BFS(start,loop);
    if(case1===-1)
        return -1
    let case2 = BFS(loop,end);
    if(case2===-1)
        return -1;
    return case1+case2;
}
//레버로 최소거리 + 레버에서 출구까지 최소거리