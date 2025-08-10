function solution(array, commands) {
    const answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        const targetArr = commands[i];        
        const sortedArr = array.slice(targetArr[0] - 1, targetArr[1]).sort((a, b) => a - b);
        
        answer.push(sortedArr.slice(targetArr[2] - 1, targetArr[2]).join(""));
    }
    
    return answer.map(Number);
}

// commands 2차원 배열을 commands의 길이만큼 반복문을 돌림
// commands의 2차원 배열의 첫 번째 및 두 번째 원소를 array.slice() 인자로 넘김
// sort((a, b) => a - b)로 숫자 오름차순 정렬
// commands의 세 번째 원소 위치에 있는 숫자를 answer 배열에 담음
// Number로 타입 변환한 뒤 return