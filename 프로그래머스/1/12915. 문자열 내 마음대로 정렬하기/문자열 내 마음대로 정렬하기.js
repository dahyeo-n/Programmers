function solution(strings, n) {
  return strings.sort((s1, s2) => 
    s1[n] === s2[n]
      ? s1.localeCompare(s2) // 두 문자열 전체를 사전순(localeCompare())으로 비교하여 정렬
      : s1[n].localeCompare(s2[n])
  );
}