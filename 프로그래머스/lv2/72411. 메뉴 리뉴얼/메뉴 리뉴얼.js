function solution(orders, course) {
    var answer = [];
    let menu = [];
    for (let i=0;i<orders.length;i++)
        for(let j=0;j<orders[i].length;j++)
            if(!(menu.includes(orders[i][j])))
                menu.push(orders[i][j])
    menu.sort()
    const checkMenu = (start,index,can_menu,new_menu) =>{
        if(index===can_menu.length){
            let count = 0;
            for(let i=0;i<orders.length;i++)
                if(can_menu.every(ele=>orders[i].includes(ele)))
                    count++;
            if(count>=2)
                new_menu.push([[...can_menu].join(""),count])
        }
        else{
            for(let i=start;i<menu.length;i++){
                if(!(can_menu.includes(menu[i]))){
                    can_menu.push(menu[i])
                    checkMenu(i+1 ,index,can_menu,new_menu)
                    can_menu.pop()
                }
            }
        }
    }
    for(const index of course){
        let new_menu = []
        let can_menu = []
        checkMenu(0,index,can_menu,new_menu)
        new_menu.sort((a,b)=>{
            if(a[1]>b[1])
                return -1
            return 1
        })
        for(let i=0;i<new_menu.length;i++){
            if(new_menu[0][1]===new_menu[i][1])
                answer.push(new_menu[i][0])
            else
                break;
        }
    }
    answer.sort()
    return answer;
}
//course 코스 요리를 구성하는 단품메뉴들의 갯수
//result는 알파벳의 오름차순으로 정렬되어야 한다. 
//sort를 어디서 해야할까...