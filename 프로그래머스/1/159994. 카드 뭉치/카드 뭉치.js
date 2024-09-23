function solution(cards1, cards2, goal) {
    let idx1 = 0;
    let idx2 = 0;
    
    for (let word of goal) {
        // 현재 단어가 cards1의 첫 번째 카드와 일치하면 cards1의 인덱스 증가
        if (idx1 < cards1.length && cards1[idx1] === word) {
            idx1++;
        }
        else if (idx2 < cards2.length && cards2[idx2] === word) {
            idx2++;
        }
        else {
            return "No";
        }
    }

    return "Yes";
}
