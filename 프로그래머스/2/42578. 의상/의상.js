function solution(clothes) {
    let types = {};  // 의상 종류별 개수를 저장할 객체
    let result = 1;  // 최종 경우의 수를 곱해 나갈 변수 (초기값 1)

    // 1️⃣ 의상 종류별 개수를 셈
    // clothes = [ [의상이름, 종류], ... ] 형태이므로 v[1]이 종류
    clothes.forEach((v) => {
        // 이미 해당 종류가 있으면 +1, 없으면 0에서 시작
        types[v[1]] = (types[v[1]] || 0) + 1;
    });

    // 2️⃣ 각 의상 종류마다 (입는 경우의 수 + 안 입는 경우)를 곱함
    // e.g. headgear가 2개라면 (2 + 1) = 3가지 선택지가 있음
    // eyewear가 1개라면 (1 + 1) = 2가지 선택지가 있음
    for (const key in types) {
        result *= types[key] + 1;
    }

    // 3️⃣ 모든 종류에서 '안 입는 경우'를 골랐을 때 (= 아무 것도 안 입었을 때)
    // 이 경우는 문제 조건상 제외해야 하므로 마지막에 -1
    return result - 1;
}
