function solution(bridge_length, weight, truck_weights) {
    var time = 1;
    let bridge = [[truck_weights[0],bridge_length+1]];
    let result = truck_weights[0];
    for(let i=1;i<truck_weights.length;i++){
        let truck = truck_weights[i];
        time++;
        if(bridge[0][1]===time){
            result-=bridge[0][0];
            bridge.shift();
        }
        while(result+truck>weight){
            time=bridge[0][1];
            result-=bridge[0][0];
            bridge.shift();
        }
        bridge.push([truck,time+bridge_length])
        result +=truck;
    }
    return bridge.at(-1)[1];
}
//