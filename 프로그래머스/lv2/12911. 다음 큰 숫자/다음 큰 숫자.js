function solution(n) {
    let two = n.toString(2);
    let num = n+1;
    let countOne = (n) =>n.match(/1/g).filter(item => item !== '').length;
    let correct = countOne(two)
    let test = countOne(num.toString(2));
    while(correct!==test){
        num++;
        test = countOne(num.toString(2));
    }
    return num;
}
//n의 다음 수 이진법으로 바꾸었을때 1의 수가 같아야함