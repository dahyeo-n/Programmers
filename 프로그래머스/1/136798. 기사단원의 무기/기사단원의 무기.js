function solution(number, limit, power) {
    let totalWeight = 0;  // 총 철의 무게를 저장할 변수

    // 1부터 number까지 기사 번호에 대해 처리
    for (let i = 1; i <= number; i++) {
        let divisorCount = 0;  // i번 기사의 약수 개수

        // i의 약수 개수를 계산
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                divisorCount++;  // 약수 발견
                if (j !== i / j) divisorCount++;  // i의 제곱근이 아닌 경우에는 다른 약수도 추가
            }
        }

        // 약수 개수가 limit보다 크면 power를 사용, 그렇지 않으면 약수 개수를 공격력으로 사용
        const attackPower = divisorCount > limit ? power : divisorCount;
        
        // 무기의 총 철의 무게를 계산
        totalWeight += attackPower;
    }

    return totalWeight;
}