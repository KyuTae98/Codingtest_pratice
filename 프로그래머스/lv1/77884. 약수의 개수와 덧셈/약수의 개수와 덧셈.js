function solution(left, right) {
    var answer = 0;
    const countDivisor = (num) =>{
        let count = 0
        for(let i=1;i<=num;i++)
            if(num%i===0)
                count++;
        if(count%2===0) return true;
        else return false;
    }
    for(let i=left;i<=right;i++)
        if(countDivisor(i)) answer+=i
        else answer-=i
    return answer;
}