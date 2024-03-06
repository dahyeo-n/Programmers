// left와 right의 약수를 먼저 구한다.
// 약수의 개수가 짝수면 더한다.
// 홀수면 뺀 결과를 반환한다.
// 약수를 구하는 코드와 for문 사용

function solution(left, right) {
  let answer = 0;
  for(let i = left; i <= right; i++) {
    if(Number.isInteger(Math.sqrt(i))) answer -= i;
    else answer += i;
  }
  return answer;
}