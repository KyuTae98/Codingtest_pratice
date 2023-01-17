function solution(data, col, row_begin, row_end) {
    var answer = 0;
    let result = [];
    let count = 0;
    let new_data = data.sort((a,b)=>{
        if(a[col-1]===b[col-1])
            return b[0]-a[0];
        return a[col-1]-b[col-1];
    })
    for(let i=row_begin;i<=row_end;i++){
        count = 0;
        new_data[i-1].forEach(element=>{
            count+=element % i;
        })
        answer = count ^ answer;
    }
    return answer;
}
//col번째 컬럼의 값을 기준으로 오름차순 키본키인 첫 번째 컬럼의 값을 기준으로 내림차순
