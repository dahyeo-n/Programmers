// 초침이 시침/분침과 겹칠 때마다 알람이 울림 (= 셋 다 겹칠 때)
// 특정 시간 동안 알람이 울린 횟수 구하기

function solution(h1, m1, s1, h2, m2, s2) {
  // 주어진 시간에 대해 시침과 분침이 초침을 지나는 횟수를 계산
  const getCount = (h, m, s) => {
    let [mCount, hCount] = [0, 0];  // 분침과 시침이 초침을 지나는 횟수를 저장할 변수를 초기화

    mCount += h * 59;  // 분침은 매 시간에 59번 초침을 지남
    hCount += h * 60;  // 시침은 매 시간에 60번 초침을 지남

    let result = 0;  // 결과를 저장할 변수

    mCount += m;  // 경과된 분만큼 분침이 초침을 지나는 횟수를 추가
    hCount += m;  // 분이 경과할 때마다 시침도 초침을 지나는 경우
    result -= 1;  // 정정값을 적용

    const curMDegree = m * 6;  // 현재 분침의 각도를 계산
    const curHDegree = 30 * (h % 12) + 0.5 * m;  // 현재 시침의 각도를 계산
    const condition1 = curMDegree <= 5.9 * s;  // 분침이 초침 위치에 있을 조건
    const condition2 = curHDegree <= (6 - 1 / 120) * s;  // 시침이 초침 위치에 있을 조건

    if (condition1) mCount += 1;  // 분침 조건 충족 시 횟수 증가
    if (condition2) hCount += 1;  // 시침 조건 충족 시 횟수 증가

    if (h >= 12) {  // 12시를 넘기는 경우
      hCount -= 1;
      result -= 1;  // 정정값 적용
    }

    result += mCount + hCount;  // 최종 결과에 분침과 시침이 초침을 지난 횟수를 더함

    return result;  // 계산된 결과 반환
  };

  let result = getCount(h2, m2, s2) - getCount(h1, m1, s1);  // 두 시간 사이의 결과 차이를 계산
  if (s1 === 0 && m1 === 0) result += 1;  // 시작 시간이 정각이면 초침을 추가로 지나는 경우를 고려

  return result;  // 최종 결과 반환
}