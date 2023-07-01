function solution(lottos, win_nums) {
    let answer = [6,6,5,4,3,2,1];
    const new_lottos = lottos.filter(element=>element!==0)
    const win_count = 6-new_lottos.length
    let count = 0;
    for (let i of new_lottos)
        if(win_nums.includes(i))
            count++
    return [answer[win_count+count],answer[count]];
}