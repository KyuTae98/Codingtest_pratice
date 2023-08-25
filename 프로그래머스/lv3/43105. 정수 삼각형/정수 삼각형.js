function solution(triangle) {
    var answer = 0;
    let length = triangle.length;
    for(let i=1;i<length;i++){
        for(let j=0;j<triangle[i].length;j++){
            let cur = triangle[i-1][j];
            let prv = triangle[i-1][j-1];
            if(prv&&cur)
                triangle[i][j]+=Math.max(cur,prv)
            else if(prv)
                triangle[i][j]+=prv
            else
                triangle[i][j]+=cur
        }
    }
    return Math.max(...triangle[length-1]);
}
/*
자기 위 아니면 -1
*/