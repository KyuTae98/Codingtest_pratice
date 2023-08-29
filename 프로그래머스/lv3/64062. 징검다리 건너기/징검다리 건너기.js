function solution(stones, k) {
    let answer = 0;
    let left = 1;
    let right = 2000000000;
    while(left<=right){
        let mid = (left+right)/2>>0;
        let count = 0;
        for(let i=0;i<stones.length;i++){
            if(stones[i]-mid<=0)
                count++;
            else 
                count = 0;
            
            if(count===k)
                break;
        }
        if(count===k)
            right = mid-1;
        else
            left = mid+1
    }
    return left;
}