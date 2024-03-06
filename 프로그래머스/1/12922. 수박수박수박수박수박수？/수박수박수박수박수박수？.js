// 문자열을 split을 이용하여 "수박수"(3글자), "수박수박"(4글자)로 자른다
// 문자열을 반복해서 return하는 함수를 만든다
// 근데 반복되는 문자열을 리턴하라는 게 3이면 "수박수"이고, 33이면 "수박수박수박"인가?

function solution(n) {
    return "수박".repeat(n).substring(0,n)
}