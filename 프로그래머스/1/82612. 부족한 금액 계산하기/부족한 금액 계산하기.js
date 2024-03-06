// count만큼 순회하며 totalPrice에 price * i를 더한다.
// 만약 money가 totalPrice보다 크면 0을, 그렇지 않다면 totalPrice - money를 return

function solution(price, money, count) {
    let totalPrice = 0;
    for(let i = 1; i <= count ; i++) {
        totalPrice += price * i;
    }
    return money > totalPrice ? 0 : totalPrice - money
}