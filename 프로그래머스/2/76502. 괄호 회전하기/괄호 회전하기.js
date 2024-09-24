function solution(s) {
    const obj = {
        '}' : '{',
        ']' : '[',
        ')' : '(',
    };
    
    // 괄호 문자열이 올바른지 확인하는 함수
    const isCorrectBracket = (str) => {
        const stk = [];
        for (const c of str) {
            if ('{[('.includes(c)) stk.push(c); // 여는 괄호일 경우 stack에 추가
            else if (obj[c] !== stk.pop()) return false; // 닫는 괄호가 대응되지 않으면 false 반환
        }
        
        // 모든 괄호가 처리된 후 스택이 비어 있으면 true, 아니면 false 반환
        return stk.length ? false : true;
    };
    
    // 문자열을 왼쪽으로 한 칸씩 회전하는 함수
    const rotate = (str) => str.substring(1) + str[0];
    
    let ret = 0;
    for (let i = 0; i < s.length; i++) {
        s = rotate(s);  // 문자열을 회전
        ret += isCorrectBracket(s) ? 1 : 0; // 회전된 문자열이 올바른 괄호 배열이면 카운트 증가
    }
    
    return ret; // 올바른 괄호 배열의 수 반환
}