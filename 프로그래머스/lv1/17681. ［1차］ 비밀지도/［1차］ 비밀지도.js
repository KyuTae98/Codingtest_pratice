function solution(n, arr1, arr2) {
    let answer = [];
    const checkAnswer = (num1,num2) => {
        const binary1 = num1.toString(2).padStart(n,'0');
        const binary2 = num2.toString(2).padStart(n,'0');
        const new_result = [];
        for(let i=0;i<n;i++){
            if(binary1[i]==='1'||binary2[i]==='1')
                new_result.push('#')
            else
                new_result.push(' ')
        }
        return new_result.join("");
    }
    for (let i = 0;i<n;i++){
        answer.push(checkAnswer(arr1[i],arr2[i]))    
    }
    
    return answer;
}
//바로 # or 공백 문자열로 바꾸기
//바로 합치기
//이진수