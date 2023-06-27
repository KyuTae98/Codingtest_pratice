function solution(s) {
    var answer = 0;
    const number = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    let i=0;
    while(!Number(s)){
        s=s.replace(number[i],i)
        i=(i+1)%10
    }
    return Number(s);
} 