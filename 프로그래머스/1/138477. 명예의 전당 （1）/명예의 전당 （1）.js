// 배열을 for문으로 하나씩 돌리며 확인
// [조건문] KScore의 가장 작은 수보다 크면 KScore 배열에 추가
// score를 내림차순으로 정렬하고
// k번째까지 KScore의 배열에 담음
// KScore의 가장 작은 수를 answer 배열에 추가
// answer return

function solution(k, score) {
    let KScore = [];
    let answer = [];
    
    for (let i = 0; i < score.length; i++) {
        KScore.push(score[i]);
        KScore.sort((a, b) => b - a); // 내림차순 정렬
        
        if (KScore.length > k) {
            KScore.pop(); // 가장 작은 값(배열의 마지막 값) 삭제
        }
        
        answer.push(KScore[KScore.length - 1]); // KScore 마지막 값(최소값)을 answer에 추가
    }
    
    return answer;
}