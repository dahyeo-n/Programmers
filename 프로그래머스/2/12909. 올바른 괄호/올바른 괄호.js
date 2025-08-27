function solution(s) {
    // 닫힌 괄호로 시작하면 false 반환
    if (s[0] === ')') return false;
    
    // 열린/닫힌 괄호의 수에 따라 +/- 이행
    let num = 0;
    
    // 괄호를 순회하며 괄호의 개수 계산
    for (let i = 0; i < s.length; i++) {
        // i가 열린 괄호면 num++, 닫힌 괄호면 num--
        s[i] === '('
            ? num += 1
            : num -= 1;
        
        // 시점에 관계없이 닫힌 괄호가 더 많아지는 경우인 음수가 되면 false 반환
        if (num < 0) return false;
    }
    
    // num이 짝수라면 열린/닫힌 괄호의 수가 동일한 것이기에 true 반환,
    // 홀수라면 올바르지 않은 괄호이기에 false 반환
    return num / 2 === 0 ? true : false;
}