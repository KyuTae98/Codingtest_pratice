function solution(n, vertex) {
    const graph = new Map();
    const node = new Array(n+1).fill().map(()=>0)
    const queue = [1]
    const pushMap = (x,y) =>{
        if(!(graph.has(x)))
            graph.set(x,[y])
        else{
            let arr = graph.get(x);
            arr.push(y)
            graph.set(x,arr)
        }
    }
    for(let i=0;i<vertex.length;i++){
        const [x,y] = vertex[i];
        pushMap(x,y);
        pushMap(y,x);
    }
    while(queue.length>0){
        let index = queue.shift()
        let arr = graph.get(index)
        for(let i of arr){
            if(i!==1&&node[i]===0){
                node[i] = node[index]+1
                queue.push(i)
            }
        }
    }
    let max = Math.max(...node)
    return node.filter(ele=>max===ele).length;
}
//1부터 시작해서 연결되어 있는거 큐에 넣는다. 