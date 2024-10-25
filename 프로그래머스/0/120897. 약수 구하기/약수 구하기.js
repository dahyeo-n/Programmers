function solution(n) {
    let index = 1;
    let answer = [];
    
    while (index <= n) {
      if (n % index === 0) answer.push(index);
      index++;
    }
    
    return answer.sort((a, b) => a - b);
}