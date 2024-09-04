function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) { // 2번째 요소부터 반복
        // food[i] 값을 2로 나눈 몫만큼 인덱스 i를 문자열로 변환하여 반복한 뒤 res에 추가
        res += String(i).repeat(Math.floor(food[i] / 2));
    }
    // res를 배열로 변환한 뒤 ([...res]),
    // 뒤집고 (reverse()), 다시 문자열로 합쳐서 (join('')) res 뒤에 붙임
    return res + '0' + [...res].reverse().join('');
}