function solution(money) {
    const OneIceAmericano = 5500; // 아이스 아메리카노 한 잔의 가격
    const MaxCups = Math.floor(money / OneIceAmericano); // 최대로 마실 수 있는 아메리카노의 잔 수
    const remainingMoney = money % OneIceAmericano; // 남은 돈 계산

    let answer = [MaxCups, remainingMoney]; // 결과 배열에 잔 수와 남은 돈 순서대로 저장
    return answer; // 결과 반환
}