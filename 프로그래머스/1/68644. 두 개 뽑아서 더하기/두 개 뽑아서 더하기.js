function solution(numbers) {
    const answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const result = numbers[i] + numbers[j];
            
            if (!answer.includes(result)) {
                answer.push(result);
            }
        }
    }
    
    return answer.sort((a, b) => a - b);
}

// 요구사항: 서로 다른 인덱스에 있는 2개의 수를 뽑아서 더한 값 중에 중복되지 않는 값만을 오름차순 정렬 후, return

// 모든 배열의 요소를 반복해서 돌면서 값을 더함
// 기존에 있는 수라면 answer 배열에 추가하지 않음
// 새로운 수라면 answer 배열에 추가
// 오름차순으로 정렬해서 return