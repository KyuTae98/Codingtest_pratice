function solution(n){
    var ans = 0;
    while(n>0){
        if(n%2===1){
            n--;
            ans++;
        }
        n=Math.floor(n/2)
    }
    return ans;
}
//dp사용?
//5000 2500 1250 625 V 624 312 156 78 39 V 38
