function solution(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      const curr = s.charAt(i); // curr: 현재 순회 중인 문자
      stack[stack.length - 1] === curr ? stack.pop() : stack.push(curr); // curr을 스택의 마지막 문자와 비교
    }
    
    return stack.length === 0 ? 1 : 0;
}