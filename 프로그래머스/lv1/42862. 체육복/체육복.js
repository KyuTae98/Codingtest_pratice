function solution(n, lost, reserve) {
    let member = new Array(n).fill(1);
    member = member.map((element,index)=>{
        if(lost.includes(index+1))
            element--;
        if(reserve.includes(index+1))
            element++;
        return element;
    })
    console.log(member)
    member.forEach((element,index)=>{
        if(element>1){
            if(member[index-1]==0&&index!==0){
                member[index-1]++;
                member[index]--;
            }
            else if(member[index+1]==0&&index!==(member.lengh-1)){
                member[index+1]++;
                member[index]--;
            }
        }
    })
    return member.filter(element=>element>0).length;
}

//체육복이 남으면 빌려준다. lost에 없는 사람에게 나눠준다. 
//greedy 생각해보기 2 0 1 2 0 2 0