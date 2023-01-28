const solution = (topping) => {
    const elementNumber = new Map();
    topping.forEach((v) => {
        if (elementNumber.has(v)) {
            const val = elementNumber.get(v);
            val.duplicated++;
            elementNumber.set(v, val);
        } else {
            elementNumber.set(v, { duplicated: 1, visited: false });
        }
    });
    let result = 0;
    let [me, brother] = [0, elementNumber.size];
    for (let i = 0; i < topping.length; i++) {
        const val = elementNumber.get(topping[i]);
        if (val.duplicated >= 1) {
            val.duplicated--;
            if (val.duplicated === 0) brother--;
        }
        if (!val.visited) { val.visited = true; me++; }
        elementNumber.set(topping[i], val);
        if (me === brother) result++;
    }

    return result;
}
/*function solution(topping) {
    var answer = 0;
    let arr1 = [];
    let arr2 = [];
    for(let i=1;i<topping.length;i++){
        arr1 = new Set(topping.slice(0,i));
        arr2 = new Set(topping.slice(i,topping.length));
        if(arr1.size===arr2.size)
            answer++;
    }
    return answer;
}*/
//나눌때 숫자 종류가 개수가 같게 자르기
//자르고 정렬후 중복값 제거? 이런식으로?