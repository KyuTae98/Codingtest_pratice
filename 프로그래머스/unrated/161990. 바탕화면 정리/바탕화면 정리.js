function solution(wallpaper) {
    let E = [];
    let S = [];
    const y = wallpaper.length;
    const x = wallpaper[0].length;
    let check = 0;
    for(let i=0;i<y;i++){
        for(let j=0;j<x;j++)
            if(wallpaper[i][j]==='#'){
                E.push(i)
                check = 1;
                break
            }
        if(check===1)
            break;
    }
    check = 0
    for(let i=0;i<x;i++){
        for(let j=0;j<y;j++)
            if(wallpaper[j][i]==='#'){
                E.push(i)
                check = 1;
                break
            }
        if(check===1)
            break
    }
    check = 0
    for(let i=y-1;i>=0;i--){
        for(let j=x-1;j>=0;j--)
            if(wallpaper[i][j]==='#'){
                S.push(i+1)
                check = 1;
                break
            }
        if(check===1)
            break
    }
    check = 0
    for(let i=x-1;i>=0;i--){
        for(let j=y-1;j>=0;j--)
            if(wallpaper[j][i]==='#'){
                S.push(i+1)
                check = 1;
                break
            }
        if(check===1)
            break;
    }
    
    return [...E,...S];
}