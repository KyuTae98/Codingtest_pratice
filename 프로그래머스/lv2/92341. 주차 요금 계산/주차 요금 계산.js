function solution(fees, records) {
    var answer = [];
    let check = {};
    let clock = (In,Out) =>{
        let new_in = In.split(":").map(element=>Number(element));
        let new_out = Out.split(":").map(element=>Number(element));
        let num = new_out[1] - new_in[1];
        if(num<0){
            num+=60;
            new_out[0]--;
        }
        return num+((new_out[0]-new_in[0])*60)
    }
    records.forEach(element=>{
        element = element.split(" ")
        if(!(element[1] in check)){//check에 없는 경우
            check[element[1]] = [element[0],0]
        }else if(element[2]==="OUT"){//OUT일 경우
            let [num1,num2] = check[element[1]]
            check[element[1]] = [0,num2+clock(num1,element[0])]    
        }else if(element[2]==="IN"){
            check[element[1]] = [element[0],check[element[1]][1]]  
        }
    })
    check = Object.entries(check).sort((a,b)=>Number(a[0])-Number(b[0]))
    for(let i=0;i<check.length;i++){
        let num = check[i][1][1];
        if(check[i][1][0]!==0)
            num+=clock(check[i][1][0],"23:59")
        if(fees[0]>num)
           answer.push(fees[1]); 
        else
            answer.push(fees[1]+Math.ceil((num-fees[0])/fees[2])*fees[3])
    }
    return answer;
}