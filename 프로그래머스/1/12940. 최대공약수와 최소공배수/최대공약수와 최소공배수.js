function solution(n, m) {
    let answer = [];
    
    // 최대공약수를 찾는 재귀 함수
    const greatest = (a, b) => {
        if (b === 0) return a;  // 기저 조건: b가 0이 되면, a는 최대공약수
        return greatest(b, a % b);  // 유클리드 알고리즘: a와 b의 최대공약수는 b와 a % b의 최대공약수와 같음
    }
    
    // 최소공배수를 찾는 함수
    const least = (a, b) => (a * b) / greatest(a, b);  // 두 수의 곱을 최대공약수로 나누어 최소공배수 계산
    return [greatest(n, m), least(n, m)];  // 최대공약수와 최소공배수를 배열로 반환
}
