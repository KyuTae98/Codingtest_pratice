function solution(k, tangerine) {
    var answer = 0;
    let kinds = new Array(1).fill(0)
    tangerine.forEach(element=>{
        if(kinds[element]>0)
            kinds[element]++;
        else
            kinds[element] = 1;
    })
    kinds.sort((a,b)=>{return (b-a)})
    kinds = kinds.filter(a=>{return a>0})
    kinds.forEach(element=>{
        if(k>0){
            k-=element;
            console.log(element)
            answer++;
        }
    })
    return answer;
}

//귤 종류의 수를 최소화
//k: 귤의 개수, result: 최종 종류의 수
//귤을 종류별로 개수 나눈다. -> 종류가 하나면 k보다 많아도 넘어간다. -> 종류가 많은 것부터 채워 넣는다. 
//배열로 정렬하기 
//111 22 33 4 2 | 1111 222 33 44 8 | 222 333 444 1111 9

