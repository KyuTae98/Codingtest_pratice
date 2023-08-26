function solution(numbers) {
    var answer = 0;
    let nums = [1,2,3,4,5,6,7,8,9]
    for(let i=0;i<nums.length;i++)
        if(!(numbers.includes(nums[i])))
            answer+=nums[i]
    return answer;
}