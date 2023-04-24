function solution(cards) {
    let maxArr = [];
    let checkCards = () =>{
        for(let i=0;i<cards.length;i++)
            if(cards[i]!==0)
                return i;
        return -1;
    }
    let flag = checkCards();
    while(flag!==-1){
        let count = 0;
        let num = 0;
        let index = 0;
        while(cards[flag]!==0){
            index = cards[flag]-1;
            cards[flag] = 0;
            flag = index;
            num++;
        }
        maxArr.push(num);
        flag = checkCards();
    }
    maxArr.sort((a,b)=>b-a)
    return maxArr.length===1?0:maxArr[0]*maxArr[1];
}
//최고점수 구하기