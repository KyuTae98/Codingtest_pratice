function solution(nums) {
    var answer = 0;
    let jong = {}
    let get = nums.length/2>>0
    for(let i=0;i<nums.length;i++){
        if(jong[nums[i]]!==undefined)
            jong[nums[i]]+=1;
        else
            jong[nums[i]] = 0
    }
    let key = Object.keys(jong).length
    return key<get?key:get;
}
//N/2만큼 가지고