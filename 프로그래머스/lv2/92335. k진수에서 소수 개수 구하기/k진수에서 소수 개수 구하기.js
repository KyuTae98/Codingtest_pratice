function solution(n, k) {
    var answer = 0;
    let result = n.toString(k);
    let check = 0;
    let count = 0;
    const Checkdecimal = (num) =>{
        let check = 0;
        if(num===1||num===0)
            return false
        for(let i=2;i<=Math.sqrt(num);i++)
            if(num%i===0){
                check=1;
                break
            }
        if(check===1)
            return false;
        return true;
    }
    
    result = [...result].reverse();
    result.forEach((element,index)=>{
        check += Number(element)*(10**count)
        count++;
        if(Number(element)===0){
            let checked = Checkdecimal(check);
            if(checked)
                answer++;
            check=0;
            count=0;
        }
    })
    if(Checkdecimal(check))
        answer++;
    return answer;
}