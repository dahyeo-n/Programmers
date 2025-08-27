function solution(lottos, win_nums) {
    // 최고 순위는 minMaxNums[0], 최저 순위는 minMaxNums[1]
    let minMaxNums = [0, 0];
    let result = [0, 0];
    
    // lottos랑 win_nums를 숫자 1개씩 비교
    for (let i = 0; i < lottos.length; i++) {
        if (win_nums.includes(lottos[i])) {
            // 1번째 경우: lottos 번호가 win_nums에 있으면 최고 순위와 최저 순위 모두 증가
            minMaxNums[0]++;
            minMaxNums[1]++;
        } else if (lottos[i] === 0) {
            // 2번째 경우: 0이면 최고 순위만 증가
            minMaxNums[0]++;
        }
    }
    
    console.log(minMaxNums);
    
    // 4. 1&2번째 경우의 등수 계산
    for (let i = 0; i < minMaxNums.length; i++) {
        switch (minMaxNums[i]) {
            case 6: result[i] = 1; break;
            case 5: result[i] = 2; break;
            case 4: result[i] = 3; break;
            case 3: result[i] = 4; break;
            case 2: result[i] = 5; break;
            default: result[i] = 6;
        }
    }
    
    return result;
}