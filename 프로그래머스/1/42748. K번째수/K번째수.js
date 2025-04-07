function solution(array, commands) {
    const answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        const slicedArray = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b);
        const number = slicedArray[commands[i][2] - 1];
        answer.push(number);
    }
    
    return answer;
}

// 반복문을 돌려서 commands를 순회
// array를 slice를 사용하여 자름
// 자른 숫자 배열을 오름순으로 정렬
// 배열의 n번째 숫자를 배열에 담음 (.push())