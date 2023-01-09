function solution(s) {
    let count = 0;
    let stack = 0;
    let change = 0;
    while(s.length!==1){
        let len = s.length;
        count=0;
        s = [...s]
        for(let i=0;i<len;i++)
            if(Number(s[i])===1)
                count++;
        stack+=len-count;
        change++;
        if(count===1)
            break;
        s = count.toString(2);
    }
    return [change,stack];
}
// s가 1이될때까지 count 사라진 0의 수