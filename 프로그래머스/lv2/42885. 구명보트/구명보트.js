function solution(people, limit) {
    let start = 0;
    let end = people.length-1;
    let count = 0;
    people.sort((a,b)=>a-b);
    while(end>=start){
        if(people[end]+people[start]<=limit)
            start++;
        end--;
        count++;
    }
    return count;
}
//인원제한... 2명