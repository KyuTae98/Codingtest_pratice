function solution(number) {
    let answer = 0;
    const threeMusketeers = (sum,count,index) => {
        if(count===3&&sum===0)
            answer++
        else
            for(let i=index; i<number.length;i++)
                if(count<3)
                    threeMusketeers(sum+number[i], count+1, i+1);
    }
    threeMusketeers(0,0,0);
    return answer;
}