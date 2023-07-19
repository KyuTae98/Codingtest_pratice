function solution(m, musicinfos) {
    const changShop = (str) =>{
        str=str.replaceAll("A#","H")
        str=str.replaceAll("C#","I")
        str=str.replaceAll("D#","J")
        str=str.replaceAll("F#","K")
        str=str.replaceAll("G#","L")
        return str
    }//A# -> H C# -> I D# -> J F# -> K G# -> L
    const getTime = (start,end) =>{
        let start_time = start.split(":").map(ele=>Number(ele))
        let end_time = end.split(":").map(ele=>Number(ele))
        let len = 0;
        if(start_time[1]>end_time[1]){
            end_time[1]+=60;
            end_time[0]--;
        }
        len=(end_time[1]-start_time[1])+((end_time[0]-start_time[0])*60);
        return len
    }
    let new_musicinfos = musicinfos.map(element=>{
        element = element.split(",")
        let [start,end,title,detail] = element;
        let time_len = getTime(start,end);//문자열의 길이
        detail = changShop(detail)
        if(Math.floor(time_len/detail.length)>0)
            detail = detail.repeat(Math.floor(time_len/detail.length)+1)
        detail = detail.slice(0,time_len)
        return [title,detail]
    })
    new_musicinfos.sort((a,b)=>{
        if(a[1].length>b[1].length)
            return -1
        return 1
    })
    m=changShop(m)
    for(let music of new_musicinfos){
        if(music[1].includes(m))
            return music[0]
    }
    return "(None)"
}
//멜로디 m, 방송된 곡의 정보 musicinfos
//C, C#, D, D#, E, F, F#, G, G#, A, A#, B #처리 해야한다.
