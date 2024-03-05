function solution(numbers) {
    var answer = 0;
    for (let i = 0; i < 10; i++) {
        // number가 i를 포함하지 않는다면 answer에 i값들을 더해줘
        if (!numbers.includes(i)) answer += i
    }
    return answer;
}