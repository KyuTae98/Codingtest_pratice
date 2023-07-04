function solution(numbers, hand) {
    var answer = '';
    const left = [-1,7,4,1];
    const right = [-1,9,6,3];
    const middle = [0,8,5,2]
    let hands = [-1,-1];
    const plusHand = (i,position) =>{
        if(position==='L'){
            answer+='L'
            hands[0] = i; 
        }
        else{
            answer+='R'
            hands[1] = i;
        }
    }
    for(let i of numbers){
        if(left.includes(i))
            plusHand(i,'L')
        else if(right.includes(i))
            plusHand(i,'R')
        else{
            const cur_mid = middle.indexOf(i);
            const cur_left = left.includes(hands[0])?Math.abs(left.indexOf(hands[0])-cur_mid)+1:Math.abs(middle.indexOf(hands[0])-cur_mid);
            const cur_right = right.includes(hands[1])?Math.abs(right.indexOf(hands[1])-cur_mid)+1:Math.abs(middle.indexOf(hands[1])-cur_mid);
            if(cur_left<cur_right)
                plusHand(i,'L')
            else if(cur_left>cur_right)
                plusHand(i,'R')
            else
                if(hand==="right")
                    plusHand(i,'R')
                else
                    plusHand(i,'L')
        }
    }
    return answer;
}
