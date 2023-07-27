function solution(p) {
    var answer = '';
    const checkUV = (str) =>{
        let count = 0;
        let index = 0;
        let check = true;
        do{
            if(str[index]==='(')
                count++;
            else
                count--;
            index++;
            if(count<0)
                check = false
        }while(count!==0);
        
        return [str.slice(0,index),str.slice(index,str.length),check]
    }
    const corBracket = (str) =>{
        if(str.length===0)
            return ""
        let [u,v,check] = checkUV(str)
        if(check)
            return u+corBracket(v);
        else{
            let cre = ""
            for(let i=1;i<u.length-1;i++)
                if(u[i]==='(')
                    cre+=')'
                else
                    cre+='('
            return '('+corBracket(v)+')'+cre
        }
    }
    answer=corBracket(p)
    return answer;
}
//모든 괄호 -> 올바른 괄호
//w -> u, v