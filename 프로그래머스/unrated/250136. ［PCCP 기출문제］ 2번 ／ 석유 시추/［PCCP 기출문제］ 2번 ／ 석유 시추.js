function solution(land) {
    let checkNum = [[-1,0],[0,-1],[0,1],[1,0]]
    let answer = 0;
    let ran = []
    let n = land.length;
    let m = land[0].length;
    const countBFS = (i,j) => {
        let bfs = [[i,j]];
        let miny = j;
        let maxy = j;
        let count = 0;
        land[i][j] = 0;
        while(bfs.length>0){
            let [x,y] = bfs.pop();
            count++;
            for(let [nx,ny] of checkNum){
                if((x+nx>=0&&x+nx<n)&&(y+ny>=0&&y+ny<m)&&land[x+nx][y+ny]===1){
                    land[x+nx][y+ny] = 0;
                    bfs.push([x+nx,y+ny])
                    if(miny>y+ny)
                        miny = y+ny
                    else if(maxy<y+ny)
                        maxy = y+ny
                }
            }
        }
        return [miny,maxy,count];
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(land[i][j]===1)
                ran.push(countBFS(i,j))
        }
    }
    for(let i=0;i<n;i++){
        let num = 0;
        ran.forEach(ele=>{
            let [min,max,c] = ele;
            if(min<=i&&max>=i)
                num+=c
        })
        if(num>answer)
            answer = num;
    }
    return answer;
}