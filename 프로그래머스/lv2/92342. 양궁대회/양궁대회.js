function solution(n, info) {
    let answer = [];
    let count = 0;
    const countAnswer = (arr) =>{
        let apeach = 0;
        let ryon = 0
        for(let i=0;i<11;i++){
            if(arr[i]>info[i])
                ryon +=10-i;
            else if(info[i]!==0)
                apeach +=10-i;
        }
        if((ryon-apeach)>count){
            count = (ryon-apeach);
            for(let i=0;i<11;i++)
                answer[i] = arr[i]
        }
        else if((ryon-apeach)===count){
            for(let i=10;i>=0;i--){
                if(arr[i]>answer[i]){
                    for(let j=0;j<11;j++)
                        answer[j] = arr[j]
                    break;
                }
                else if(arr[i]<answer[i])
                    break
            }
        }
    }
    const allCount = (index, counting, arr) => {
        if(index===11){
            let check = 0
            if(counting>0){
                arr[10] += counting;
                check = 1;
            }
            countAnswer(arr)
            if(check===1)
                arr[10] -= counting
        }
        else{
            for(let i=index;i<arr.length;i++){//모든 경우의수 드가자
                if(counting>info[i]){
                    arr[i]+=info[i]+1
                    counting -= info[i]+1
                    allCount(i+1,counting,arr);
                    counting +=info[i]+1;
                    arr[i]-=info[i]+1
                }
                allCount(i+1,counting,arr);
            }
        }
    }
    let counting = n;
    let arr = Array(11).fill().map(()=>0)
    allCount(0,counting,arr);
    return count===0?[-1]:answer;
}
//점수 차이가 같을 경우 가장 낮은 점수를 더 많이 맞힌 경우 return 
//무조건 뒤로 넘기기
//그냥 모든 경우를 고려해야한다 