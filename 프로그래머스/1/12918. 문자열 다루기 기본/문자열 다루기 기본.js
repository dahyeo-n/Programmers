// s의 길이가 4 or 6인지 체크
// 문자가 들어가면 False, 아니면 True

function solution(s) {
    return (s.length === 4 || s.length === 6) && s == parseInt(s)
}