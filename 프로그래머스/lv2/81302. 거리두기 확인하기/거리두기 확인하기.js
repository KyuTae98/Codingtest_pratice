function solution(places) {
    var answer = [];
    places = places.map(pla => pla.map(ele=>ele.split("")))
    const serchP = (arr) =>{
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr[i].length;j++){
                if(arr[i][j]==='P'){
                    arr[i][j] = 'X';
                    return [i,j,0];
                }
            }
        }
        return ['X']
    }

    for(let index = 0;index<places.length;index++){
        let str = [serchP(places[index])]
        while(str[0][0]!=='X'){
            let [x,y,c] = str.shift();
            if(x-1>-1&&places[index][x-1][y]!=='X'){
                if(c+1<=2&&places[index][x-1][y]==='P'){
                    answer.push(0);
                    break
                }
                str.push([x-1,y,c+1])
            }
            if(x+1<5&&places[index][x+1][y]!=='X'){
                if(c+1<=2&&places[index][x+1][y]==='P'){
                    answer.push(0);
                    break
                }
                str.push([x+1,y,c+1])
            }
            if(y-1>-1&&places[index][x][y-1]!=='X'){
                if(c+1<=2&&places[index][x][y-1]==='P'){
                    answer.push(0);
                    break
                }
                str.push([x,y-1,c+1])
            }
            if(y+1<5&&places[index][x][y+1]!=='X'){
                if(c+1<=2&&places[index][x][y+1]==='P'){
                    answer.push(0);
                    break
                }
                str.push([x,y+1,c+1])
            }
            if(c===2||str.length===0)
                str = [serchP(places[index])]
        }
        if(answer.length<=index)
            answer.push(1)
    }
    return answer;
}