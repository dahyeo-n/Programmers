function solution(num1, num2) {
    // Math.trunc는 소수 자리수 빼고 정수만 반환
    return Math.trunc(num1 / num2 * 1000);
}