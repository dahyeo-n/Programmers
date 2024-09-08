function solution(arr) {
    // 최대공약수(GCD)를 구하는 재귀 함수
    const getGCD = (a, b) => {
        if (a % b === 0) return b;  // a가 b로 나누어 떨어지면, b가 최대공약수
        return getGCD(b, a % b);    // 그렇지 않다면, b와 a % b로 재귀 호출
    }
    
    // 최소공배수(LCM)를 구하는 함수
    const getLCM = (a, b) => a * b / getGCD(a, b);  // 두 수의 곱을 최대공약수로 나눔

    // 배열의 모든 값에 대해 LCM을 구함
    return arr.reduce((a, c) => getLCM(a, c), 1);  // reduce를 이용해 배열의 최소공배수 계산
}