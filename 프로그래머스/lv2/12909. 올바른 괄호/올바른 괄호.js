function solution(s){
        let check=0;
        for(let i=0;i<s.length;i++){
            if(s[i]==='(')
                check++
            else{
                check--;
                if(check<0)
                    return false
            }
        }
        if(check>0)
            return false
        else
           return true
}