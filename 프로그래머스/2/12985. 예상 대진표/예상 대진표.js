function solution(n, a, b) {
    let answer = 0;
    
    while (a !== b) {
        // 참가자의 번호를 2로 나누고, 올림 처리하여 다음 라운드 번호로 이동
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++; // 라운드 수 증가
    }

    return answer;
}