function solution(num_str) {
    // (1) 스프레드 문법을 통해 문자열을 배열로 변환
    // (2) 각 요소를 Number로 문자에서 숫자로 변환 후, 숫자들의 누적값 반환
    return [...num_str].map(Number).reduce((a, b) => a += b);
}