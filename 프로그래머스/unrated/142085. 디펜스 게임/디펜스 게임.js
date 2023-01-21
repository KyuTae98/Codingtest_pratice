function solution(n, k, enemy) {
    if(k>=enemy.length||n>=enemy.reduce((sum,curr)=>sum+curr))
        return enemy.length;
    
    let zero = (num) =>{
        if(num<0)
            return 0;
        return num
    }
    let start = 0;
    let end = enemy.length;
    
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        let new_arr = enemy.slice(0,mid);
        new_arr.sort((a,b)=>a-b);
        new_arr.splice(zero(new_arr.length-k),new_arr.length);
        if(new_arr.length>0){
            let result = new_arr.reduce((sum,curr)=>sum+curr)
            if(result>n)
                end = mid-1;
            else if(result<n)
                start = mid+1;
            else
                return mid;
        }
        else
            start = mid+1;
    }
    
    return start-1;
}
//반례 생각해보기
//1.무적권이 적보다 많거나 같을 경우
//2.병사가 적보다 많거나 같을 경우
//병사와 적의 수가 딱 맞을 경우 처리 완료
