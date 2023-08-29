function solution(n, costs) {
    var answer = 0;
    let graph = new Array(n).fill().map(()=>new Array(n).fill('X'))
    let check = new Array(n).fill().map(()=>0)//방문 체크
    let node = new Array(n).fill().map(()=>0)//값 넣기
    let index = 0;
    for(let element of costs){
        let [x,y,cost] = element
        graph[x][y] = cost
        graph[y][x] = cost
    }
    
    while(check.includes(0)){
        check[index] = 1;//시작값 방문
        if(index===-1)
            break
        let minIndex=-1;
        let min = -1;
        for(let i=0;i<n;i++){
            if(i===index||graph[index][i]==='X'||check[i]===1)
                continue
            if((graph[index][i]<node[i])||node[i]===0)
                node[i] = graph[index][i];
        }
        for(let i=0;i<n;i++){
            if(check[i]===1||node[i]===0)
                continue
            if(min===-1||min>node[i]){
                min = node[i]
                minIndex = i
            }
        }
        index = minIndex
    }
    return node.reduce((a,b)=>a+b);
}
//섬연결하기