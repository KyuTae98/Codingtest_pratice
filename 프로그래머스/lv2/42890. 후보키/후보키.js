function solution(relation) {
    let answer = [];
    const relationLan = relation.length
    const checkAnswer = (arr) =>{
        for(const element of answer){
            let count = 0;
            for(const index of element){
                if(arr.includes(index))
                    count++;
            }
            if(element.length===count)
                return false
        }
        return true
    }
    const candidate = (arr,index,start) =>{
        if(index===arr.length){
            let new_arr = arr.join("")
            let set = new Set(relation.map(ele=>{
                let str = ""
                for(let i=0;i<arr.length;i++)
                    str+=ele[arr[i]]
                return str
            }));//유일성 알아보기
            if(relationLan===set.size&&checkAnswer(new_arr))
                answer.push(new_arr)
            else
                return
        }
        else{
            for(let i=start;i<relation[0].length;i++){
                if(!(arr.includes(i))){
                    arr.push(i)
                    candidate(arr,index,i+1)
                    arr.pop()
                }
            }
        }
    } 
    for(let i=0;i<relation[0].length;i++)
        candidate([],i+1,0)
    return answer.length;
}