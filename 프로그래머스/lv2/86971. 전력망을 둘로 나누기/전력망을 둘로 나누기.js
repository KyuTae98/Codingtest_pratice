function solution(n, wires) {
    var answer = n;
    let graph = new Array(n).fill().map(()=>new Array(n).fill().map(()=>0))
    wires.forEach((ele)=>{
        let [x,y] = ele;
        graph[x-1][y-1] = 1;
        graph[y-1][x-1] = 1;
    })
    const countGraph = (graph,num) =>{
        let check = new Array(n).fill().map(()=>0);
        let arr = [num];
        check[num] = 1;
        while(arr.length>0){
            let index = arr.shift();
            for(let i=0;i<n;i++)
                if(check[i]===0&&(graph[index][i]===1||graph[i][index]===1)){
                    arr.push(i);
                    check[i] = 1;
                }
        }
        return check.filter(ele=>ele===1).length
    }
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(graph[i][j]===1){
                graph[i][j] = 0;
                graph[j][i] = 0;
                let x = countGraph(graph,i);
                let y = Math.abs(2*x-n);
                if(answer>y)
                    answer = y
                graph[i][j] = 1;
                graph[j][i] = 1;
            }
        }
    }
    return answer;
}

//송전탑이 수 n, 전선 정보 wires -> 전선들 중 하나를 끊어서 가능한 비슷하게 차이(절대값)
//트리만들고 완전탐색하기