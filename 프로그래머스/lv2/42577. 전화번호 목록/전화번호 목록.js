function solution(phone_book) {
    let answer = true;
    phone_book = phone_book.sort()
    for(let i=0;i<phone_book.length-1;i++){
        if(phone_book[i+1].indexOf(phone_book[i])===0)
            answer = false
    }
    return answer;
}
//실패하는 이유
//앞글자로 정리해서 찾아보기? 가보자