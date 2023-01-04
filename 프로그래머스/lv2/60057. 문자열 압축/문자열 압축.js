function solution(s) {
    if(s.length===1)
        return 1
    const result = new Array(Math.floor(s.length/2)).fill(0);
    const SliceArr = (index) =>{
        let arr = [];
        let i = 0;
        while(i<s.length){
            arr.push(s.slice(i,i+index));
            i+=index;
        }
        return arr;
    }
    let new_result = result.map((element,index)=>{
        let arr = SliceArr(index+1);
        let start = arr[0];
        let startIndex = 0;
        let count = 1;
        for(let i=1;i<arr.length+1;i++){
            if(start!==arr[i]){
                if(count>1){
                    arr.splice(startIndex,count-1,count);
                    i-=count
                }
                start=arr[i];
                count = 1;
                startIndex=i;
            }
            else
                count++;    
        }
        arr = arr.join("")
        return arr.length;
    })
    return Math.min.apply(null,new_result);
}
//문자열 1개 이상 단위로 잘라서 압축 -> 처음부터 한문자씩 자른다 
//가장 짧은 길이의 문자열 return
//문자 한개씩 줄인다. 
