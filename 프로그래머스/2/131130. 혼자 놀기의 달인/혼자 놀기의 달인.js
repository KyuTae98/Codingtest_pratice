function solution(cards) {
    const arr = new Array(cards.length).fill().map(()=>0);
    const check = new Array(cards.length).fill().map(()=>0);
    let index = 0;
    let count = 1;
    while(arr.includes(0)){
        arr[index] = count;
        index = cards[index]-1;
        check[count-1]++;
        if(arr[index]===count){
            count++;
            index = arr.indexOf(0)
        }
    }
    check.sort((a,b)=>b-a)
    return check[0]*check[1];
}
//1번 상자만 있다면 0