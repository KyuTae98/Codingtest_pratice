function solution(s) {
    let result = s.split(" ");
    let new_result = result.map(element=>{
        element = [...element]
        let new_element = element.map((ch,index) => {
            if(index===0)
                return ch.toUpperCase();
            else 
                return ch.toLowerCase();
        })
        return new_element.join("");
    })
    new_result = new_result.join(" ")
    return new_result;
}
//단어의 앞글자 대문자로 바꿔주기, 나머지 소문자로 바꿔주기