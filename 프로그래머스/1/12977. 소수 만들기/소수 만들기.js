function solution(nums) {
  let len = nums.length, answer = 0;

  // 3개의 숫자를 고르고, 소수 여부 확인
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer++;
      }
    }
  }

  return answer;
}

// 소수 판별 함수
const isPrime = (n) => {
  if (n < 2) return false; // 2보다 작은 수는 소수가 아님
  if (n === 2 || n === 3) return true; // 2, 3은 소수
  if (n % 2 === 0 || n % 3 === 0) return false; // 2와 3으로 나누어지면 소수가 아님

  // 5부터 √n까지 확인, 홀수만 검사
  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}
