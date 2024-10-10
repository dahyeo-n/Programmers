// 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 배열 score
function solution(k, m, score) {
    if (score.length < m) return 0;
    
    let total = 0;
    score.sort((a, b) => b - a); // 내림차순 정렬
    
    for (let i = 0; i < score.length; i += m) { // 매번 i가 m만큼 증가
        if (i + m > score.length) break; // 남은 사과가 m개보다 적으면 종료
        
        const box = score.slice(i, i + m); // m개의 사과를 선택
        const price = m * box[box.length - 1]; // m * 가장 작은 점수
        total += price;
    }
    
    return total;
}