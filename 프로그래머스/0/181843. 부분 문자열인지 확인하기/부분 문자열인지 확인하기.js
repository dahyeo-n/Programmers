function solution(my_string, target) {
    // (1) my_string이 target을 포함하고 있는지를 boolean 값(true 또는 false)으로 반환
    // (2) Number(...): 결과인 boolean 값을 숫자로 변환
    return Number(my_string.includes(target))
}