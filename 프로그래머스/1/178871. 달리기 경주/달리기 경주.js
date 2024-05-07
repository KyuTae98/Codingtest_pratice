function solution(players, callings) {
    const playerHash = players.reduce((sum,cur,index) => {
        sum[cur]=index;
        return sum;
    },{})
    for(const culPlayer of callings){
        const culPlayerIndex = playerHash[culPlayer];
        const nextPlayer = players[culPlayerIndex-1];
        playerHash[culPlayer] -= 1;
        playerHash[nextPlayer] += 1;
        [players[culPlayerIndex], players[culPlayerIndex-1]] = [players[culPlayerIndex-1], players[culPlayerIndex]]
    }
    
    return players;
}