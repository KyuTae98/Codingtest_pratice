function solution(phone_number) {
    let count = phone_number.length-4
    let number = phone_number.slice(count,phone_number.length)
    let str = '*'.repeat(count)
    return str+number;
}