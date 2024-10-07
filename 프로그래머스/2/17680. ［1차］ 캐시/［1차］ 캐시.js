function solution(cacheSize, cities) {
    let answer = 0;
    const cache = new Map();  // LRU를 관리할 Map 사용

    // 캐시 크기가 0인 경우, 모든 요청은 캐시 미스가 발생하므로 총 실행시간은 cities.length * 5
    if (cacheSize === 0) return cities.length * 5;

    for (const city of cities) {
        const cityLower = city.toLowerCase();

        if (cache.has(cityLower)) {
            cache.delete(cityLower);  // LRU 정책에 따라 기존 위치 제거
            answer += 1;  // 캐시 히트일 경우 실행시간 1
        } else {
            if (cache.size === cacheSize) {
                const firstKey = cache.keys().next().value;
                cache.delete(firstKey);  // 가장 오래된 항목 제거
            }
            answer += 5;  // 캐시 미스일 경우 실행시간 5
        }

        cache.set(cityLower, true);  // 항상 최신 항목을 삽입
    }

    return answer;
}