function solution(box, n) {
    var answer = 0;
    const [x,y,h] = box;
    answer = (x/n>>0)*(y/n>>0);
    answer*=h/n>>0
    return answer;
}