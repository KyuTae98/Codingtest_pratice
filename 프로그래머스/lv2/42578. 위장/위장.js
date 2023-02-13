function solution(clothes) {
    var answer = 1;
    let count = {};
    clothes.forEach(element=>{
        if(!(element[1] in count))
            count[element[1]] = 1;
        else
            count[element[1]]+=1
    })
    for(let value of Object.values(count))
        answer*=(value+1)
    return answer-1;
}