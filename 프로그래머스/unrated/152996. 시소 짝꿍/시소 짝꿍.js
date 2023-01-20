function solution(weights) {
    let answer = 0;
    let result = new Map()
    let factorial = (value) =>{
        let count = 1;
        for(let i=2;i<=value;i++)
            count*=i;
        return count;
    }
    
    let checkWei = (num,mul,div) =>{//있는지 확인해서 return 
        let check = result.has(num*mul/div);
        if(check===true)
            return result.get(num*mul/div);
        return 0;
    }
    
    weights.forEach(element=>{//Map을 이용해서 같은거 묶기
        if(result.has(element))
            result.set(element,result.get(element)+1)
        else
            result.set(element,1)})
    weights.forEach(element=>{
        if(result.get(element)>1)
            answer+=result.get(element)-1;
        answer+=checkWei(element,2,3);
        answer+=checkWei(element,2,4);
        answer+=checkWei(element,3,2);
        answer+=checkWei(element,3,4);
        answer+=checkWei(element,4,2);
        answer+=checkWei(element,4,3);
    })
    
    /*result.forEach((value,key,map)=>{
        let checkValue = 0;
        checkValue+=checkWei(key,3,2);
        checkValue+=checkWei(key,4,2);
        checkValue+=checkWei(key,4,3);
        if(value>1){
            answer+=factorial(value)/(factorial(2)*factorial(value-2))
            checkValue*=value;
        }
        answer+=checkValue;
    })*/
    return answer/2;
}
//같은거 검사 -> 자신보다 큰값들 기준으로만 