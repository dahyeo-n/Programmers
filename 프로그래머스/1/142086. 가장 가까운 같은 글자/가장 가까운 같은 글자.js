function solution(s) {
    const cutString = s.split('');
    let answer = [];
    let stack = [];
    
    for (let i = 0; i < cutString.length; i++) {
        if (!stack.includes(cutString[i])) {
            answer.push(-1);
        } else {
            answer.push(i - stack.lastIndexOf(cutString[i]));
        }
        stack.push(cutString[i]);
    }
    
    return answer;
}