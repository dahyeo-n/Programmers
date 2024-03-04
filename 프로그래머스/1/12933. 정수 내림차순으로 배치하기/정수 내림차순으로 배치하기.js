function solution(n) {
    // 문자열은 0~9까지만 비교하여 매개변수 없이 sort 메소드만 사용
    const answer = Number(n.toString().split('').sort().reverse().join(''))
    return answer;
}