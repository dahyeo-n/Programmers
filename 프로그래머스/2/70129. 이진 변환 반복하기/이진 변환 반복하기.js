function solution(s) {
    var answer = [0, 0];
    
    while (s.length > 1) {
        answer[0]++;
        // "문자열".match(/정규표현식/플래그): 문자열이 정규표현식과 일치하는 부분을 검색해서 배열로 반환
        answer[1] += (s.match(/0/g) || []).length;
        // "문자열".replace(/정규표현식/플래그/대체문자열): 문자열에서 정규표현식과 일치하는 부분을 대체문자열로 변환
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}