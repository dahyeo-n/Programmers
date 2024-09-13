function solution(k, tangerine) {
  let answer = 0; // 답을 저장할 변수, 선택한 귤의 종류 수
  const tDict = {}; // 귤의 종류별로 개수를 저장할 객체

  // 귤 종류별로 등장 횟수 카운트
  tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));

  // 귤 종류별 등장 횟수를 배열로 변환한 후 내림차순으로 정렬
  const tArr = Object
                .values(tDict)
                .sort((a, b) => b - a);

  // 필요한 귤의 개수(k)만큼 최소한의 종류로 귤을 골라냄
  for (const t of tArr) {
    answer++; // 귤 종류 하나를 선택
    if (k > t) {
      k -= t; // 필요한 귤의 개수에서 그 종류의 귤 개수만큼 뺌
    } else {
      break; // 더 이상 귤을 골라야 할 필요가 없으면 종료
    }
  }

  return answer;
}