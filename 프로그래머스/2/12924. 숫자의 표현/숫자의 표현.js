function solution(n) {
  let answer = 0; // 홀수 약수의 개수를 세기 위한 변수 초기화

  for (let i = 1; i <= n; i++) { // 1부터 n까지 모든 숫자에 대해 반복
    if (n % i === 0 && i % 2 === 1) { // 조건문으로 약수 및 홀수인지 확인
      answer++; // 조건에 맞는 경우, 홀수 약수의 개수를 하나 증가
    }
  }
  
  return answer; // 계산된 홀수 약수의 총 개수를 반환
}