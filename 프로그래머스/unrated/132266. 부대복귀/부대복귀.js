function solution(n, roads, sources, destination) {
    let answer = [];
    let arrIndex = 0;
    let des = destination-1;
    let check = new Array(n).fill().map(()=>-1);
    let arr = [des];
    let graph = new Array(n).fill().map(()=>[]);
    
    for(let i=0;i<roads.length;i++){
        let [x,y] = roads[i];
        graph[x-1].push(y-1)
        graph[y-1].push(x-1)
    }
    check[des] = 0;
    
    while(arr.length>arrIndex){
        let index = arr[arrIndex++];
        for(let i=0;i<graph[index].length;i++){
            if(check[graph[index][i]]===-1){
                check[graph[index][i]] = check[index]+1;
                arr.push(graph[index][i]);
            }
        }
    }
    for(let i=0;i<sources.length;i++)
        answer.push(check[sources[i]-1])
    return answer;
}
//다익스트라가 맞다 