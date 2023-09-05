function solution(line) {
    let answer = [];
    let stars = [];
    const makeStar = (l1,l2) => {
        let [a,b,e] = l1;
        let [c,d,f] = l2;
        let x = (b*f-e*d)/(a*d-b*c)
        let y = (e*c-a*f)/(a*d-b*c)
        return [x,y]
    }
    const starSort = (num) =>{
        stars.sort((x,y)=>{
            if(x[num]>y[num]) return 1
            return -1
        })
        if(stars[0][num]>0){
            let min = stars[0][num];
            stars = stars.map(ele=>{
                ele[num] -= min
                return ele
            })
        }
        else if(stars[0][num]<0){
            let min = Math.abs(stars[0][num])
            stars = stars.map(ele=>{
                ele[num] += min
                return ele
            })
        }
    }
    for(let i=0;i<line.length-1;i++){
        for(let j=i+1;j<line.length;j++){
            let [x,y] = makeStar(line[i],line[j])
            if((Number.isInteger(x)&&Number.isInteger(y))&&!(stars.includes(String(x)+","+String(y))))
                stars.push(String(x)+","+String(y));
        }
    }
    stars = stars.map(ele=>{
        ele = ele.split(",")
        return [Number(ele[0]),Number(ele[1])]
    })
    starSort(0)
    let n = stars[stars.length-1][0] - stars[0][0] + 1//x 음수 보정하기
    starSort(1)
    let m = stars[stars.length-1][1] - stars[0][1] + 1//y 음수 보정하기 
    let starMap = new Array(m).fill().map(()=>new Array(n).fill().map(()=>"."))
    stars.forEach(ele=>{
        starMap[ele[1]][ele[0]] = "*"
    })
    starMap = starMap.map(ele=>ele.join("")).reverse()
    return starMap;
}