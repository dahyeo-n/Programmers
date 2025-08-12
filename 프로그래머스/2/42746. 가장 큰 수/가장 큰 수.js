function solution(numbers) {
    // 1. 모든 숫자를 문자열로 변환
    const nums = numbers.map(String);
    
    // 2. 정렬: a+b와 b+a 비교
    nums.sort((a, b) => (b + a) - (a + b));
    
    // 3. 정렬 후 이어붙임
    const answer = nums.join('');
    
    // 4. "0"만 여러 개 있는 경우 → "0" 반환
    return answer[0] === '0' ? '0' : answer;
}
