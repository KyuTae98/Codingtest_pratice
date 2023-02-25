function solution(str1, str2) {
    let inter = 0;
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    let NewClustering = (str) =>{
        let arr = [];
        const convStr = str.replace(/[^a-zA-Z]/g, " ");
        for(let i=0;i<convStr.length-1;i++)
            if(convStr[i]!==" "&&convStr[i+1]!==" ")
                arr.push(str[i]+str[i+1]);
        return arr;
    }
    let new_str1 = NewClustering(str1);
    let new_str2 = NewClustering(str2);
    let str1len = new_str1.length;
    let str2len = new_str2.length;
    if(new_str1.length===0&&new_str2.length===0)
        return 65536
    for(let i=0;i<new_str1.length;i++){
        for(let j=0;j<new_str2.length;j++){
            if(new_str1[i]===new_str2[j]){
                inter++;
                new_str2.splice(j,1);
                break;
            }
        }
    }
    return Math.floor((inter/(str1len+str2len-inter))*65536);
}
//교집합 구하기... 어떻게 구할까...