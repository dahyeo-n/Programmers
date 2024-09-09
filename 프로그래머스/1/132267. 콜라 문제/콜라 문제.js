function solution(a, b, n) {
    let change = 0; // 받은 콜라 수
    
    while (n >= a) { // 교환 가능한 수량이 아닐 때까지 반복
        change += Math.floor(n/a) * b;
        n = Math.floor(n/a) * b + n % a;
    }
    
    return change;
}