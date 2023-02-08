function solution(arrayA, arrayB) {
    let answer=0;
    arrayA.sort((a,b)=>a-b);
    arrayB.sort((a,b)=>a-b);
    let minNum = arrayA[0] - arrayB[0]> 0? arrayA[0]:arrayB[0]
    let checkNum = (arr1,arr2,num) =>{
        for(let i of arr1)
            if(i%num!==0)
                return false
        for(let i of arr2)
            if(i%num===0)
                return false
        return true;
    }
    for(let i=minNum;i>=2;i--){
        if(checkNum(arrayA,arrayB,i)||checkNum(arrayB,arrayA,i))
            return i;
    }
    return answer;
}
//가장 작은 값부터 내려가면서 찾기