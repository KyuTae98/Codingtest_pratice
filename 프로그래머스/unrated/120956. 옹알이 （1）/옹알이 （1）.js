function solution(babbling) {
    let answer = 0;
    let words = ["aya", "ye", "woo", "ma"];
    for(let bab_word of babbling){
        let count = 0;
        let check = 0;
        while(count<4){
            count=0;
            words.forEach(ele=>{
                if(bab_word.includes(ele))
                    bab_word = bab_word.split(ele).join(",")
                else count++;
            })
        }
        for(let i=0;i<bab_word.length;i++)
            if(bab_word[i]!==',')
                check = 1;
        if(check===0)
            answer++;
    }
    return answer;
}
//"aya", "ye", "woo", "ma"