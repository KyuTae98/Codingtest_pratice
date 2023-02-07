function solution(skill, skill_trees) {
    var answer = 0;
    skill = [...skill]
    skill_trees.forEach(element=>{
        let check = new Array(skill.length).fill(0)
        let count = 0;
        for(let i of element){
            if(skill.includes(i)){
                let index = skill.indexOf(i);
                if(index-1>=0&&check[index-1]===0){
                    count = 1;
                    break;
                }
                check[index]=1;
            }
        }
        if(count===0)
            answer++;
    })
    return answer;
}
//뒤에 있는게 먼저 나오면 false
//있으면 바로 뒤에 있는것을 확인하다. 