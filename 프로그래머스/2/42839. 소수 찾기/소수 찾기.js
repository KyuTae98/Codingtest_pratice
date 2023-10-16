function solution(numbers) {
    let answer = [];
    let arr = numbers.split("");
    let count = 0;
    const checkSOSU = (num) =>{
        if(num<2)
            return false
        for(let i=2;i<=Math.sqrt(num);i++)
            if(num%i===0)
                return false
        return true
    }
    const DFS = (index,num) =>{
        for(let i=0;i<numbers.length;i++){
            if(!(index.includes(i))){
                index.push(i)
                num.push(numbers[i])
                let ele = Number(num.join(""))
                if(checkSOSU(ele)&&!(answer.includes(ele)))
                    answer.push(ele)
                DFS(index,num)
                num.pop();
                index.pop();
            }
        }
    }
    DFS([],[])
    console.log(answer)
    return answer.length;
}
//반복문으로 짜보기 재귀는 쉬움
