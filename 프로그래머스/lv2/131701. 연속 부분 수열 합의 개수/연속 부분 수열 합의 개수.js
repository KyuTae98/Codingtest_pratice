function solution(elements) {
    var answer = 0;
    let result = new Set(elements);
    let check = elements;
    for (let i=1;i<elements.length;i++){
        check = check.map((ele,index)=>{
            ele+=elements[(i+index)%elements.length];
            result.add(ele)
            return ele;
        })
    }

    return result.size;
}
//원형 수열의 합으로 만들 수 있는 수 모두 몇가지 인지
//연속된 수열의 합을 이용한다. slice 잘라보기