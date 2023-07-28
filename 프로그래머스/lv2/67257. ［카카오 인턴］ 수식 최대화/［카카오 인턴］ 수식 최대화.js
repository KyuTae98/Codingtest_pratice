function solution(expression) {
    let answer = [];
    let new_exp= []
    let ope = [];
    let check = '';
    if(expression.includes('+'))
        ope.push('+')
    if(expression.includes('-'))
        ope.push('-')
    if(expression.includes('*'))
        ope.push('*')
    for(let i=0;i<expression.length+1;i++){
        if(isNaN(Number(expression[i]))){
            new_exp.push(Number(check))
            if(typeof expression[i] !== "undefined")
                new_exp.push(expression[i])
            check = ''
        }
        else
            check+=expression[i]
    }
    const calculator = (arr) =>{
        if(arr.length===ope.length){
            let result = [...new_exp];
            for(const ele of arr){
                for(let i=0;i<result.length;i++){
                    if(result[i]===ele){
                        let num = 0;
                        if(ele==='+')
                            num = result[i-1]+result[i+1]
                        else if(ele==='-')
                            num = result[i-1]-result[i+1]
                        else
                            num = result[i-1]*result[i+1]
                        result.splice(i-1,3,num)
                        i--;
                    }
                }
            }
            answer.push(Math.abs(result[0]))
        }
        else{
            for(const ele of ope){
                if(!(arr.includes(ele))){
                    arr.push(ele)
                    calculator(arr)
                    arr.pop()
                }
            }
        }
    }
    calculator([])
    return Math.max(...answer);
}
//수식 우선순위 정하기
//절댓값으로 정하기