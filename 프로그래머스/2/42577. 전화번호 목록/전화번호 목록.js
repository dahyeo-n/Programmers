function solution(phone_book) {
  phone_book.sort(); // 전화번호 리스트 정렬

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) {  // 현재 번호와 다음 번호의 시작 부분이 같으면 접두어
      return false;
    }
  }

  return true;
}