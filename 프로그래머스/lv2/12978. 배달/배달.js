function solution(N, road, K) {
    let node = new Array(N).fill().map(()=>0);
    let check = new Array(N).fill().map(()=>0);
    let graph = new Array(N).fill().map(()=>new Array(N).fill().map(()=>0))
    for(let i=0;i<road.length;i++){
        let [x,y,n] = road[i];
        if(graph[x-1][y-1]===0||graph[x-1][y-1]>n){
            graph[x-1][y-1] = n;
            graph[y-1][x-1] = n;
        }
    }
    check[0] = 1;
    let dijstra = [0];
    //1을 기준으로 node가중치
    while(dijstra.length>0){
        let num = dijstra.shift();
        check[num] = 1;
        let weight = node[num];//가중치
        for(let i=1;i<N;i++){
            if(graph[num][i]===0)//graph
                continue
            if(node[i]===0||node[i]>graph[num][i] + weight)
                node[i] = graph[num][i] + weight;
        }
        let minIndex = 0;
        let min = 0;
        for(let i=0;i<N;i++){
            if(check[i]===1||node[i]===0)
                continue;
            if(min===0||min>node[i]){
                min = node[i];
                minIndex = i;
            }
        }
        if(minIndex!==0)
            dijstra.push(minIndex)
    }
    return node.filter((ele)=>ele<=K).length;
}