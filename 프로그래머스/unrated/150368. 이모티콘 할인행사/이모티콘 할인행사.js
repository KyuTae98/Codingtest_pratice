function solution(users, emoticons) {
    let answer = [0,0];
    let sales = [10,20,30,40]
    const emoticonPlus = (emo) =>{
        let getUsers = [0,0];
        for(let i=0;i<users.length;i++){
            let count = 0
            for(let j=0;j<emoticons.length;j++){
                if(users[i][0]<=emo[j])
                    count+=emoticons[j] * ((100-emo[j])/100)
                if(count>=users[i][1]){
                    getUsers[0]++
                    count = 0
                    break;
                }
            }
            getUsers[1]+=count
        }
        if((answer[0]<getUsers[0])||(answer[0]===getUsers[0]&&answer[1]<getUsers[1]))
            answer=getUsers
    }
    const emoticonSale = (emo) =>{
        if(emo.length===emoticons.length){
            emoticonPlus(emo)
        }
        else{
            for(let i=0;i<sales.length;i++){
                if(emo.length<emoticons.length){
                    emo.push(sales[i])
                    emoticonSale(emo)
                    emo.pop()
                }
            }
        }
    }
    emoticonSale([])
    return answer;
}
//서비스 가입자를 늘린다. > 판매액을 늘린다. -> 플러스 가입 늘리기
//n명의 카카오톡 사용자에게 m개를 할인하여 판매
//판매율 10 20 30 40
//기준에 맞는 일정 비율 이상 할인하는 이모티콘 모두 구매
//가격이 일정수준 올라가면 플러스 가입