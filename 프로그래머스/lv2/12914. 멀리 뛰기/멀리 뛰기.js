function solution(n) {
    var answer = 0;
    let num = [1n,1n,2n];
    for(let i = 3; i<=n;i++){
        num.push(num[i-1]+num[i-2]);
    }
    return num[n]%1234567n;
}

//1칸 또는 2칸을 뛸 수 있다. 뛰는 방법을 찾아라
//4 5
//3 3
//5 8
//6 