// [문제] 10진수 -> 3진수 -> 뒤집기 -> 다시 10진수로 변환해 return
const solution = (n) => parseInt(n.toString(3).split("").reverse().join(''), 3);

// n.toString(3): n을 3진수 문자열로 변환
// .split(""): 3진수 문자열을 한 글자씩 나누어 배열로 변환
// reverse()로 앞뒤 반전
// .join(''): 배열의 요소를 다시 문자열로 합침
// parseInt(문자열, 3): 문자열을 다시 3진수로 해석해 10진수로 변환