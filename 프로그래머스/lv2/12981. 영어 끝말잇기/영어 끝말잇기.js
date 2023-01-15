function solution(n, words) {
    let useWords = [];
    for(let i=0;i<words.length;i++){
        if(i!==0&&(useWords.includes(words[i])||words[i-1][words[i-1].length-1]!==words[i][0]))
            return [(i%n)+1,Math.floor(i/n)+1]
        useWords.push(words[i])
    }
    return [0,0];
}
//먼저 탈락하는 사람, 몇 번째 차례에 탈락했는지