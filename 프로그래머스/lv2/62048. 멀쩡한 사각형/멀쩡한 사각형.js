function solution(w, h) {
    if(w===h)
        return w*h-w;
    const GCD =(a,b) =>{
        while(b>0){
            let c=a%b;
            a=b;
            b=c;
        }
        return a;
    }
    let divisor = GCD(w,h);
    return w*h-(((w/divisor)+(h/divisor)-1)*divisor);
}
//나누기 2를 하면서 간다 이런..
//짝수인지 홀수인지 생각해보자
//짝짝, 짝홀, 홀홀 나눠서 생각 -> 더 생각해봐야함 젠장