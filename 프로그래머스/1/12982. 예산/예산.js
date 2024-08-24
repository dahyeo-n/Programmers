function solution(d, budget) {
	// [중요] 배열을 오름차순으로 정렬
	d.sort((a, b) => a - b); // [1, 2, 3, 4, 5]

    // reduce를 사용해서 배열에 있는 값 더하고,
    // 더한 값이 예산보다 크면 배열 원소를 하나씩 제거
    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop(); // [1, 2, 3, 4]
    
    // 예산보다 작거나 같아지는 순간이 가장 많은 부서를 지원할 수 있는 개수이므로, 해당 배열의 개수를 반환
    return d.length; // 4
}