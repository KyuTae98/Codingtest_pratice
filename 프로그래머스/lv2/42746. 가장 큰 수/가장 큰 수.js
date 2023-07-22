function solution(numbers) {
    let result = 0;
    numbers = numbers.map(ele=>ele.toString())
    numbers.sort((a,b)=>{
        if(Number(a+b)<Number(b+a))
            return 1
        else
            return -1
    })
    if(numbers[0]==='0')
        return '0'
    
    return numbers.join("");
}
//1. 맨 앞의 자리 수로 비교하기
//2. 같을 경우 뒤자리 비교하는데 앞자리보다 작을 경우 하나가 더 큰것