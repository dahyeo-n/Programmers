// 정수 절대값 = [] = absolutes
// 정수 부호를 담은 불리언 배열 = signs
// 정수들의 합 구해 return

function solution(absolutes, signs) {
    var answer = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}