function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    let organize = {}
    id_list.forEach(element=>{
        organize[element] = []
    })
    report.forEach(element =>{
        let reporter = element.slice(0,element.indexOf(" "));
        let reported = element.slice(element.indexOf(" ")+1,element.length)
        if(!organize[reported].includes(reporter))
            organize[reported].push(reporter);
    })
    id_list.forEach(element=>{
        if(organize[element].length>=k){
            organize[element].forEach(member => {
                let index = id_list.indexOf(member);
                answer[index]++;
            })
        }
    })
    return answer;
}

//게시판 불량 이용자 신고 처리 결과 메일로 발송 시스템
//한 번에 한명 신고 가능(횟수 제한 X, 서로다른 유저 계속해서 신고)
//한 유저를 여러 번 신고 가능, 동일한 유저 신고 횟수 1회
//k번 이상 신고받으면 사용 정지, 신고내용 취합후 메일 발송