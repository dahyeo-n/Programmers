function solution(num_list) {
    // (1) reverse는 원본 배열을 변형하기 때문에 ...(spread 구문)을 이용해 배열을 복사
    // (2) reverse로 순서 반전
    // (3) 구조분해할당을 통해 a와 b에 각각 마지막 원소와 마지막 이전 원소를 할당
    
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a - b) : a * 2];
}