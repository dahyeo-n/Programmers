function solution(n) {
    // 제곱 판별: sqrt
    return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1
}