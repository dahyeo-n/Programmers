function solution(answers) {
    const scores = [0, 0, 0];
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    // 각 패턴에 따라 점수 계산
    answers.forEach((answer, i) => {
        patterns.forEach((pattern, idx) => {
            if (pattern[i % pattern.length] === answer) {
                scores[idx]++;
            }
        });
    });
    
    // 최고 점수를 가진 사람 찾기
    const maxScore = Math.max(...scores);
    
    return scores
        .map((score, idx) => score === maxScore ? idx + 1 : null)
        .filter(person => person !== null);
}