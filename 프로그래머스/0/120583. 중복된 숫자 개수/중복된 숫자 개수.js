function solution(array, n) {
    // 배열에서 n의 값을 가진 요소만 필터링하고, 그 길이를 반환
    let answer = array.filter((item) => item === n).length;
    return answer;
}