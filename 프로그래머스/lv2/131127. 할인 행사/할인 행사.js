function solution(want, number, discount) {
    let answer = 0;
    let count = (arr) =>{
        let check = {};
        arr.forEach(element=>{
            if(element in check)
                check[element] = check[element]+1;
            else
                check[element] = 1;
        })
        for(let i=0;i<want.length;i++){
            if(!(want[i] in check))
                return false;
            else if(number[i]!==check[want[i]])
                return false;
        }
        return true;
    }
    for(let i=0;i<discount.length-9;i++)
        if(count(discount.slice(i,i+10)))
            answer++;
    return answer;
}
//10일