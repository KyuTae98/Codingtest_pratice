function solution(s) {
    s=s.split("")
    s.sort((a,b)=>{
        if(a>b)
            return -1
        return 1
    })
    return s.join("");
}