function solution(s){
    let answer = 1;
    let dir = {}
    const checkPel = (start,end) =>{
        let count = Math.ceil((end - start)/2);
        let check = 0;
        for(let i=0;i<count;i++)
            if(s[start+i]!==s[end-i]){
                check = 1;
                break;
            }
        if(check===0&&answer<end-start+1)
            answer = end-start+1;
    }
    for(let i=0;i<s.length;i++){
        if(dir[s[i]])
            dir[s[i]].push(i)
        else
            dir[s[i]] = [i]
    }
    for(const ele of Object.keys(dir)){
        if(dir[ele].length>1){
            for(let i=0;i<dir[ele].length;i++)
                for(let j=i+1;j<dir[ele].length;j++){
                    if(answer<dir[ele][j]-dir[ele][i]+1)
                        checkPel(dir[ele][i],dir[ele][j])
                }
        }
    }
    return answer;
}
//1. 좌표를 알파벳순으로 정리한다.
//2. 반으로 자른다. -> 짝수 홀수 확인