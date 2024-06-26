function solution(n) {
    let answer = [];
    for (let i = 1; i <= n; i += 2) {  // 1부터 n까지 홀수만 반복하여 추가
        answer.push(i);
    }
    return answer;
}