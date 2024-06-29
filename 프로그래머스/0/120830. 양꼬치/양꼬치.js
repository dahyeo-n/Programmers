function solution(n, k) {
    const lambSkewers = 12000;
    const drink = 2000;
    
    if (n >= 10) {
        k -= Math.floor(n / 10);
    }
    
    let answer = (lambSkewers * n) + (drink * k)
    return answer;
}