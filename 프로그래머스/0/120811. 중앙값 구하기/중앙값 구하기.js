function solution(array) {
    // 배열을 오름차순으로 정렬
    array.sort((a, b) => a - b);

    // 중앙값을 찾기 위한 인덱스 계산
    const middleIndex = Math.floor(array.length / 2);

    // 배열의 길이가 홀수인 경우
    if (array.length % 2 !== 0) {
        return array[middleIndex];
    }
    // 배열의 길이가 짝수인 경우, 중앙 두 수의 평균 반환
    else {
        return (array[middleIndex - 1] + array[middleIndex]) / 2;
    }
};