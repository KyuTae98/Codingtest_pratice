function solution(arr) {
    let GCD = (a,b)=>{
        let n;
        while(b!==0){
            n=a%b;
            a=b;
            b=n;
        }
        return a;
    }
    while(arr.length!==1){
        let answer = arr[0]*arr[1]/GCD(arr[0],arr[1]);
        arr.splice(0,2,answer)
    }
    return arr[0];
}