function solution(x, y, n) {
     if(x===y)
        return 0;
    let answer = 0;
    let dp = {};
    dp[x]=0
    let stack = [x]
    while(stack.length>0){
        let new_stack = [];
        for(let i of stack){
            for(let j of [i+n,i*2,i*3]){
                if(j>y||dp[j]) continue
                if(j===y) return dp[i]+1
                new_stack.push(j);
                dp[j] = dp[i]+1
            }
        }
        stack = new_stack;
    }
    return -1;
}
//DP방법 생각해보기,, 오브젝트 사용하기..