// 반복되는 문자열 표시: repeat()
// 마지막 4개의 문자열 표시: slice()

function solution(phone_number) {
    let result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    return result;
}