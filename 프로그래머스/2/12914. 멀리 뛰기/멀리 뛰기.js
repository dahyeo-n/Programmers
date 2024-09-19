function solution(n) {
    let answer, t1 = 0, t2 = 1; // answer를 (0, 1)로 초기화
    for (let i = 2; i <= n + 1; i++) {
        answer = (t1 + t2) % 1234567; // 나머지 연산(% 1234567)을 사용해 큰 수의 연산 최적화
        t1 = t2;
        t2 = answer; // t1을 t2로, t2를 answer로 업데이트하며 다음 피보나치 수 계산
    }
    
    return answer;
}