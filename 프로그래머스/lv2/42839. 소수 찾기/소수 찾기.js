function solution(numbers) {
    var answer = [];
    let checkArr = new Array(numbers.length).fill(0);
    let numberStack = [];
    numbers = numbers.split("");
    const checkDecimal = (num) =>{
        if(num===1||num===0)
            return false;
        for(let i = 2;i<=Math.sqrt(num);i++)
            if(num%i===0)
                return false;
        return true;
    }
    
    const DFS = () =>{
        for(let i=0;i<numbers.length;i++){
            if(checkArr[i]===0){
                checkArr[i]=1;
                numberStack.push(numbers[i])
                let checkNumber = Number(numberStack.join(""));
                if(!answer.includes(checkNumber)&&checkDecimal(checkNumber))
                    answer.push(checkNumber);
                DFS();
                checkArr[i]=0;
                numberStack.pop();
            }
        }
    }
    DFS();
    return answer.length;
}
//소수의 개수 찾기 
//재귀로 DFS 이용하기