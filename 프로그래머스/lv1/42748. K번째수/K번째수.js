function solution(array, commands) {
    var answer = [];
    for(let ele of commands){
        let [i,j,k] = ele;
        let str = array.slice(i-1,j);
        str.sort((a,b)=>{
            if(a>b)
                return 1;
            return -1
        })
        answer.push(str[k-1])
    }
    return answer;
}