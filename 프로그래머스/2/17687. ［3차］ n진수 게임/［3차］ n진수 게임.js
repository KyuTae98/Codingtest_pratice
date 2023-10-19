function solution(n, t, m, p) {
    let answer = '';
    let count = "0";
    let index = 0;
    let tenUp = ['A','B','C','D','E','F']
    const toN = (num) =>{
        let str = "";
        while(num>0){
            let ch = num%n;
            if(Number(ch)>=10)
                ch = tenUp[Number(ch)%10]
            str+=ch;
            num=num/n>>0
        }
        return str.split("").reverse().join("")
    }
    while(count.length<t*m)
        count += toN(index++);
    for(let i=0;i<t;i++){
        answer+=count[p-1]
        p+=m;
    }
    return answer;
}
/*
n - 진법
t - 필요한 개수
m - 참가인원
p - 본인 순서
t*m -> 구해야하는 개수
*/