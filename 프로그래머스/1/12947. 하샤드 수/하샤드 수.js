// (1) 먼저 x를 split()을 사용해 자릿수로 나누어 준다.
// (2) for문을 돌려 나눈 자릿수들을 더해준다.
// (3) x와 더한 값을 나누어 반환되는 나머지를 판별해 조건에 따라 출력한다.

function solution(x) { // x = 18
    var sum = 0;
    var arr = String(x).split(""); // [1, 8]
    
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]) // 1 + 8
    }
    return (x % sum == 0) ? true : false;
};