function solution(arr) {
  var answer = [];  // 결과를 저장할 배열 초기화
  for (let i = 0; i < arr.length; i++) {  // 배열의 각 요소에 대해 반복
    if (arr[i] !== arr[i + 1]) {  // 현재 요소와 다음 요소를 비교
      answer.push(arr[i]);  // 현재 요소가 다음 요소와 다르면, 결과 배열에 추가
    }
  }
  return answer;  // 결과 반환
}