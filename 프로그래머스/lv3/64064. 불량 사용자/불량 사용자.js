function solution(user_id, banned_id) {
    var answer = [];
    const checkUser = (ban,user) =>{
        ban = ban.split("")
        user = user.split("")
        for(let i=0;i<ban.length;i++){
            if(ban[i]==='*')
                user[i] = '*'
        }
        ban=ban.join("")
        user=user.join("")
        if(ban===user)
            return true
        return false
    }
    const DFS = (arr,index) =>{
        if(index===banned_id.length){
            let subarr = [...arr].sort().join("")
            if(!(answer.includes(subarr)))
                answer.push(subarr)
        }
        else{
            for(let i=0;i<user_id.length;i++){
                if(!(arr.includes(user_id[i]))&&(banned_id[index].length===user_id[i].length)&&checkUser(banned_id[index],user_id[i])){
                    arr.push(user_id[i])
                    DFS(arr,index+1);
                    arr.pop()
                }
            }
        }
    }
    DFS([],0)
    return answer.length;
}
//수학적으로 접근해보기 -> 완전탐색
//금지 유저 한개당 생각하기 