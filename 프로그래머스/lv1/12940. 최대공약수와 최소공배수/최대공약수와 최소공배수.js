function solution(n, m) {
    var answer = [];
    
    let getGCD2 = (num1, num2) => {
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    } 
    return num1;
    }
    let gcd = getGCD2(n,m);
    let lcm = (n*m) / gcd;
    return [gcd,lcm];
}