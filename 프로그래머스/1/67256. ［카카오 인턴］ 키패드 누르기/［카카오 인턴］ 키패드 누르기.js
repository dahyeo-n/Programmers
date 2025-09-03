function solution(numbers, hand) {
    let answer = [];
    
    // 전제: 엄지는 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당
    
    // 현재 왼손, 오른손 위치 추적 (초기값: *, #)
    let leftPos = [3, 0];   // * 위치
    let rightPos = [3, 2];  // # 위치
    
    // 키패드 좌표 매핑 (행, 열)
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    // 맨해튼 거리 계산 함수
    // Math.abs: 매개변수를 숫자로 강제 변환
    const getDistance = (pos1, pos2) => {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    }
    
    // (1) numbers 배열만큼 반복
    for (let i = 0; i < numbers.length; i++) {
        const targetNum = numbers[i];
        const targetPos = keypad[targetNum];
        
        // (2) 1, 4, 7: 왼손
        if (targetNum === 1 || targetNum === 4 || targetNum === 7) {
            answer.push("L");
            leftPos = targetPos; // 왼손 위치 업데이트
        } else if (targetNum === 3 || targetNum === 6 || targetNum === 9) {
            // (3) 3, 6, 9: 오른손
            answer.push("R");
            rightPos = targetPos; // 오른손 위치 업데이트
        } else {
            // (4) 2, 5, 8, 0: 더 가까운 엄지 사용 ⇒ 직전 왼손/오른손와의 거리 파악 후 push
            const leftDistance = getDistance(leftPos, targetPos);
            const rightDistance = getDistance(rightPos, targetPos);
            
            if (leftDistance < rightDistance) {
                answer.push("L");
                leftPos = targetPos; // 왼손 위치 업데이트
            } else if (rightDistance < leftDistance) {
                answer.push("R");
                rightPos = targetPos; // 오른손 위치 업데이트
            } else {
                // (5) 거리 같으면 어떤 손잡이인지로 판가름
                switch (hand) {
                    case "left":
                        answer.push("L");
                        leftPos = targetPos; // 사용한 손의 위치 업데이트
                        break;
                    case "right":
                        answer.push("R");
                        rightPos = targetPos;
                        break;
                }
            }
        }
    }
    
    // 배열을 문자열로 변환
    return answer.join("");
}