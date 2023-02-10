function solution(genres, plays) {
    var answer = [];
    let song = {}
    let new_song = []
    for(let i=0;i<genres.length;i++){
        if(!(genres[i] in song))
            song[genres[i]] = [plays[i],i,i];
        else{
            let [count,first,second] = song[genres[i]];
            count +=plays[i];
            if(plays[first]<plays[i]){
                second = first;
                first = i;
            }
            else if((plays[second]<plays[i])||first===second)
                second = i;
            song[genres[i]] = [count,first,second];
        }
    }
    for(let name in song)
        new_song.push(song[name])
    new_song.sort((a,b)=>b[0]-a[0])
    for(let element of new_song){
        if(element[1]!==element[2])
            answer.push(element[1]);
        answer.push(element[2]);
    }
    return answer;
}
//객체 3개