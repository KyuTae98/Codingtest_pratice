function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    const cacheWind = (cache,city) =>{
        const index = cache.indexOf(city);
        for(let i=index;i<cache.length-1;i++)
            cache[i]=cache[i+1]            
        cache[cache.length-1] = city
    }
    for(let i=0;i<cities.length;i++){
        let city = cities[i].toUpperCase()
        if(cache.includes(city)){
            answer+=1;
            cacheWind(cache,city)
        }
        else{
            answer+=5
            if(cache.length<cacheSize)
                cache.push(city);
            else{
                cache.push(city);
                cache.shift()
            }
        }
    }
    return answer;
}
//LRU는 가장 오래동안 참조되지 않은 것을 제거한다. 