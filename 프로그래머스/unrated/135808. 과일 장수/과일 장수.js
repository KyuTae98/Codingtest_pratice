function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => {return a-b});
    while(score.length>=m){
        answer += score[score.length-m] * m;
        score.splice(score.length-m,score.length-1);
    }
    return answer;
}
//k점 ~ 1점, m개씩 담아 포장, 
//(상자에 담긴 사과 중 가장 낮은 점수) p * m -> 
//상자에서 m개 뽑는다. 
//1 1 2, 2 2 2, 4 4 4, 4 4 4 = 3 + 6 + 12 + 12