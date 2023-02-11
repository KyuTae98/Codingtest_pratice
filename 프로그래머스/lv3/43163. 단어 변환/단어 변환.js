function solution(begin, target, words) {
    var answer = 0;
    let queue = [begin]
    if(!words.includes(target))
        return 0;
    let checkWord = (word1,word2,index) =>{
        for(let i=0;i<word1.length;i++){
            if(i===index)
                continue;
            if(word1[i]!==word2[i])
                return false;
        }
        return true;
    }
    while(queue.length>0){
        let new_queue = [];
        for(let word1 of queue)
            for(let i=0;i<words.length;i++)
                for(let j=0;j<words[i].length;j++)
                    if(words[i]!==word1&&words[i][j]!==word1[j]){
                        if(checkWord(words[i],word1,j))
                            new_queue.push(words[i])
                    }
        answer++;
        queue=new_queue;
        if(queue.includes(target))
            return answer
    }
    return 0;
}