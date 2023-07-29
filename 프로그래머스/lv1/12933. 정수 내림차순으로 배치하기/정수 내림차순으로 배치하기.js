function solution(n) {
    n=n.toString().split("").sort((a,b)=>{
        if(Number(a)<Number(b))
            return 1
        return -1
    }).join("")
    return Number(n);
}