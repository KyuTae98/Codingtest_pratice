function solution(arr1, arr2) {
    let answer = [];
    const proci = (h,w,limit) =>{
        for(let i=0;i<w.length;i++){
            const new_arr = [];
            for(let j=0;j<h[0].length;j++){
                let num = 0;
                let index = 0;
                while(index<limit){
                    num+=h[index][j]*w[i][index];
                    index++;
                }
                new_arr.push(num);
            }
            answer.push(new_arr)
        }
    }//높이와 넓이가 같을 경우
    if(arr1[0].length===arr2.length)
        proci(arr2,arr1,arr2.length);
    else
        proci(arr1,arr2,arr1.length);
    
    return answer;
}
//넓이와 높이가 같을 경우
/*
1 4     3 3
3 2     3 3
4 1
*/