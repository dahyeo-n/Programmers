function solution(A, B) {
    let answer = 0;
    A.sort((a, b) => a - b);  // 배열 A를 오름차순으로 정렬
    B.sort((a, b) => b - a);  // 배열 B를 내림차순으로 정렬

    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];  // 배열 A의 i번째 요소와 배열 B의 i번째 요소를 곱한 값을 answer에 더함
    }
    return answer;  // 계산된 결과를 반환
}
