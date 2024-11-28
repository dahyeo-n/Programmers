function solution(a, b) {
    const aPlusb = String(a) + String(b);
    const aTimesbTimes2 = 2 * a * b;
    
    return aPlusb >= aTimesbTimes2 ? Number(aPlusb) : Number(aTimesbTimes2);
}