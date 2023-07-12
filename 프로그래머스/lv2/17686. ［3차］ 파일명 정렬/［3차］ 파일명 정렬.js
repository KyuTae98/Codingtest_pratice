function solution(files) {
    var answer = [];
    let new_files = files.map(element=>{
        let head = ""
        let num = ""
        let tail = ""
        for(let i=0;i<element.length;i++){
            if((Number(element[i])||Number(element[i])===0)&&element[i]!==" "){
                head = element.substring(0,i)
                let check = i;
                while((Number(element[i])||Number(element[i])===0)&&element[i]!==" ")
                    i++
                num = element.substring(check,i)
                tail = element.substring(i,element.length)
                break
            }
        }
        return [head,num,tail]
    })
    new_files.sort((a,b)=>{
        if(a[0].toUpperCase()>b[0].toUpperCase())
            return 1
        else if(a[0].toUpperCase()<b[0].toUpperCase())
            return -1
        else{
            if(Number(a[1])<Number(b[1]))
                return -1
            else
                return 1
        }
    })
    return new_files.map(element=>(element.join("")));
}
//파일명은 우선 HEAD로 정렬
//파일명이 같은 경우 NUMBER의 숫자 순으로 정렬
//둘다 같을 경우 