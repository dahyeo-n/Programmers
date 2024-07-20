function solution(babbling) {
    let answer = 0;
    
    // (1) babbling 배열을 for문으로 순회하며 ya, aya, woo, ma를 replace()를 사용해 공백으로 바꿈
    // (2) trim()으로 공백을 제거
    // (3) 빈 문자열이 되면 answer에 1을 더함
    for (let i = 0; i < babbling.length; i++) {
        if (babbling[i].replace('ye', ' ').replace('aya', ' ').replace('woo', ' ').replace('ma', ' ').trim() === '') {
            answer++;
        }
    }
    
    return answer;
}