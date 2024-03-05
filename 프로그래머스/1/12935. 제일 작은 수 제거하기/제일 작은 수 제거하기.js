// Math.min 사용
// 삼항연산자 사용 가능


function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    arr.length <= 1 ? answer = [-1] : answer = arr;
    
    return answer;
}