function solution(a, b) {
    const aPlusb = String(a) + String(b);
    const aTimesBTimes2 = 2 * a * b;
    
    return aPlusb >= aTimesBTimes2 ? Number(aPlusb) : Number(aTimesBTimes2);
}