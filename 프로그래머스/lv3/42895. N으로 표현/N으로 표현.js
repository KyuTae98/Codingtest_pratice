function solution(N, number) {
    let num_set = new Array(8).fill().map(()=>new Set())
    let multiple = (index) =>{
        let num = N;
        for(let i=0;i<index;i++){
            num*=10;
            num+=N;
        }
        return num
    }
    for(let i=0;i<8;i++){
        num_set[i].add(multiple(i))
        for(let j=0;j<i;j++){
            for(let num1 of num_set[j]){
                for(let num2 of num_set[i-j-1]){
                    num_set[i].add(num1+num2)
                    num_set[i].add(num1*num2)
                    num_set[i].add(Math.floor(num1/num2))
                    num_set[i].add(num1-num2)
                }
            }
        }
        if(num_set[i].has(number))
            return i+1
    }
    return -1
}
//N이 추가 되면서 사칙연산에 N -> 값넣기
//+ - * / 연결,