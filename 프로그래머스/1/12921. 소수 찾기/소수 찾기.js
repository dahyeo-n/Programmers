function isPrime(x) {
    if (x < 2) return false; // 1과 1보다 작은 수는 소수가 아님
    if (x === 2) return true; // 2는 유일한 짝수 소수
    if (x % 2 === 0) return false; // 그 외 짝수는 소수가 아님
    
    // 3부터 √x까지 홀수만 확인 (2는 이미 처리했으므로)
    for (let i = 3; i <= Math.sqrt(x); i += 2) {
        if (x % i === 0) return false;
    }
    
    return true;
}

function solution(n) {
    let answer = 0;
    if (n === 2) return 1;

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) answer++;
    }
    
    return answer;
}