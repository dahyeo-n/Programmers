// 배열을 divisor로 나누었을 때, 나오는 값이 0이면 나누어 떨어지는 숫자
// 마지막에 오름차순으로 정렬만 해주면 됨

function solution(arr, divisor) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]);
        }
    }
    if (answer.length == 0) {
        answer.push(-1);
    }
    answer.sort((a, b) => a - b);
    return answer;
}