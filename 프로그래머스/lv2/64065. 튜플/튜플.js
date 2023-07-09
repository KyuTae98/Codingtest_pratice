function solution(s) {
    let answer = [];
    let new_arr = s.split('{').join("").split('}')
    new_arr.sort((a,b)=>{
        if(a.length>b.length)
            return 1
        else
            return -1
    })
    for(let i=2;i<new_arr.length;i++){
        let arr = new_arr[i].split(',')
        for(let j of arr){
            if(!(answer.includes(Number(j)))&&Number(j))
                answer.push(Number(j))
        }
    }
    return answer;
}
//튜플이 문자열로 제공된다. -> 배열로 만든다