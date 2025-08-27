function solution(phone_book) {
    // 1. 전화번호부 정렬
    phone_book.sort();
    
    // 2. 인접한 번호끼리 접두어 관계 확인
    for (let i = 0; i < phone_book.length - 1; i++) {
        // 다음 번호가 현재 번호를 접두어로 가지는지 확인
        if (phone_book[i+1].startsWith(phone_book[i])) {
            return false;
        }
    }
    
    // 3. 접두어가 없으면 true
    return true;
}