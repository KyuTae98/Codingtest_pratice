function solution(clothes) {
    let answer = 1;
    let cloth = {}
    for(let i=0;i<clothes.length;i++){
        if(cloth[clothes[i][1]])
            cloth[clothes[i][1]]++
        else
            cloth[clothes[i][1]] = 1
    }
    let keys = Object.keys(cloth)
    for(let i=0;i<keys.length;i++)
        answer *=(cloth[keys[i]]+1)
    return answer-1;
}