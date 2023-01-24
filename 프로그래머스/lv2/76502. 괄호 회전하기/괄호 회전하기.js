function solution(s) {
    var answer = 0;
    let check = (arr,index) =>{
        let checkArr = [];
        let count = 0;
        while(arr.length>count){
            let element = arr[index%arr.length]
            if(element==='('||element==='['||element==='{')
                checkArr.push(element);
            else{
                if(checkArr.length===0)
                    return false
                let checkBracket = checkArr.pop();
                if(!((element===')'&&checkBracket==='(')||(element==='}'&&checkBracket==='{')||(element===']'&&checkBracket==='[')))
                    return false
            }
            count++;
            index++;
        }
        if(checkArr.length>0)
            return false
        return true
    }
    for(let i=0;i<s.length-1;i++){
        let checking = check(s,i);
        if(checking)
            answer++;
    }
    return answer;
}
