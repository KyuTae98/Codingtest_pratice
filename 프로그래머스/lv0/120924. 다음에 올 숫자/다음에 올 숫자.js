function solution(common) {
    var answer = 0;
    if(common[1]-common[0]===common[2]-common[1])
        answer=common[common.length-1]+(common[2]-common[1]);
    else
        answer=common[common.length-1]*(Math.floor(common[2]/common[1]));
    return answer;
}


//등차수열 등비수열 왔을 때 다음 수 예측하기
//수열이 아닌 경우는 없다, 공비가 0인 경우도 없다.
//등차인지 등비인지 확인해야 한다. 