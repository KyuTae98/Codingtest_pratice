function solution(arr1, arr2) {
    var answer = [];
    for(let i=0;i<arr1.length;i++){
        let new_arr = []
        for(let j=0;j<arr1[i].length;j++){
            new_arr.push(arr1[i][j]+arr2[i][j])
        }
        answer.push(new_arr)
    }
    return answer;
}