function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0) 
    
    // 신고 당한 유저의 id를 key로 하고 신고한 유저의 id를 배열로 저장하는 객체
    const report_list = {}
    
    id_list.map((user) => {
        report_list[user] = [] // key로 user_id를, value로 빈 배열을 가지는 객체
    })
    
    report.map((user) => {
        const [user_id, report_id] = user.split(' ')
        if (!report_list[report_id].includes(user_id)) {
            report_list[report_id].push(user_id)
        }        
    })
    
    for (const key in report_list) {
        if (report_list[key].length >= k) { // 이용 정지 유저
            report_list[key].map((user) => {
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    
    return answer;
}