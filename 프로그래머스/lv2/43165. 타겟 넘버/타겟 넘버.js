function solution(numbers, target) {
    var answer = 0;
    let DFS = (index) =>{
        if(index<numbers.length){
            DFS(index+1);
            numbers[index]*=-1;
            DFS(index+1);
            numbers[index]*=-1;
        }
        else{
            if(target===numbers.reduce((cur,sum)=>cur+sum))
                answer++;
        }
    }
    DFS(0);
    return answer;
}
//numbers에다 -1붙이고 