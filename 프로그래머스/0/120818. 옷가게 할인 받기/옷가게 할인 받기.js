function solution(price) {
    let discount = 0;
    
    if (price >= 500000) {
        discount = price * 0.2; // 20% 할인
    } else if (price >= 300000) {
        discount = price * 0.1; // 10% 할인
    } else if (price >= 100000) {
        discount = price * 0.05; // 5% 할인
    }
    // 만약, 10만 원 미만인 경우 discount = 0;으로 계산되어 할인이 적용되지 않음
    
    return price - Math.ceil(discount); // 본래 가격에 할인 적용한 금액 반환
}