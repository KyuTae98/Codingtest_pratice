function solution(land) {
    for(let i=1;i<land.length;i++){
        land[i][0] += Math.max(land[i-1][1],land[i-1][2],land[i-1][3])
        land[i][1] += Math.max(land[i-1][0],land[i-1][2],land[i-1][3])
        land[i][2] += Math.max(land[i-1][1],land[i-1][0],land[i-1][3])
        land[i][3] += Math.max(land[i-1][1],land[i-1][2],land[i-1][0])
    }
    return Math.max.apply(null,land[land.length-1]);
}
//최대값 return
//4개에서 출발