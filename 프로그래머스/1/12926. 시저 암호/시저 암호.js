function solution(s, n) {
    let answer = '';
    let bigA = 'A'.charCodeAt();
    let smallA = 'a'.charCodeAt();
    let bigZ = 'Z'.charCodeAt();
    let smallZ = 'z'.charCodeAt();
    if(n>26)
        n=n%26;
    const changeN = (num,check) =>{
        if(check===1){
            if(num+n>bigZ)
                num = ((num+n)-bigZ)+bigA-1
            else
                num += n;
        }
        else{
            if(num+n>smallZ)
                num = ((num+n)-smallZ)+smallA-1
            else
                num += n;
        }
        return String.fromCharCode(num.toString())
    }
    for(let i=0;i<s.length;i++){
        if(s[i]===' ')
            answer+=' '
        else{
            let num = s[i].charCodeAt()
            if(bigA<=num&&num<=bigZ)
                answer+=changeN(num,1)
            else
                answer+=changeN(num,0)
        }
    }
    return answer;
}
//charCodeAt fromCharCode