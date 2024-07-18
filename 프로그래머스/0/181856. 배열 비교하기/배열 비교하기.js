function solution(arr1, arr2) {
    // 각 배열의 합계 계산
    const arr1Sum = arr1.reduce((acc, cur) => acc + cur, 0);
    const arr2Sum = arr2.reduce((acc, cur) => acc + cur, 0);

    // 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교
    // 다르다면 더 큰 쪽이 크고, 같다면 0을 return
    if (arr1.length === arr2.length) {
        if (arr1Sum > arr2Sum) {
            return 1;
        } else if (arr2Sum > arr1Sum) {
            return -1;
        } else {
            return 0;
        }
    }

    // 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큼
    return arr1.length > arr2.length ? 1 : -1;
}
