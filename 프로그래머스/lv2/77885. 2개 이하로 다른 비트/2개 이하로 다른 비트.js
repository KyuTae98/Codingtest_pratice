function solution(numbers) {
    let answer = [];
    let check = 0;
    for(let i=0;i<numbers.length;i++){
        let binary = [...numbers[i].toString(2)];
        check = 0;
        for(let j=binary.length-1;j>=0;j--){
            if(binary[j]==='0'){
                let square = (binary.length-1)-j;
                let plus = Math.ceil(2**square/2)
                answer.push(numbers[i]+plus)
                check=1;
                break;       
            }
        }
        if(check===0){
            answer.push(numbers[i]+Math.ceil(2**binary.length/2))
        }
    }
    return answer;
}
//비트가 다른 지점1개에서 2개, 제일 작은 수
//1이면 넘어가고 0일때 1더하기