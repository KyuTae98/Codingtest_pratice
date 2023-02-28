function solution(sticker) {
    if(sticker.length===1)
        return sticker[0]
    let len = sticker.length-1;
    let dp1 = sticker.map(element=>element);
    let dp2 = sticker.map(element=>element);
    dp1.pop();
    dp2.shift();
    for(let i=1;i<len;i++){
        if(i===1)
            dp1[i] = Math.max(dp1[i],dp1[i-1])
        else
            dp1[i] = Math.max(dp1[i]+dp1[i-2],dp1[i-1])
    }
    for(let i=1;i<len;i++){
        if(i===1)
            dp2[i] = Math.max(dp2[i],dp2[i-1])
        else
            dp2[i] = Math.max(dp2[i]+dp2[i-2],dp2[i-1])
    }
    return Math.max(dp2.at(-1),dp1.at(-1));
}
//2개로 시작