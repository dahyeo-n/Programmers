function solution(participant, completion) {
    const map = new Map();
    
    // 참가자 인원 카운트
    for (const name of participant) {
        // 참가자 명단을 돌며 이름을 key로, 등장 횟수를 value로 저장
        map.set(name, (map.get(name) || 0) + 1); // e.g. { leo: 2, kiki: 1, eden: 1 }
    }
    
    // 완주자 인원 차감
    for (const name of completion) {
        // 완주자 명단을 돌면서 같은 이름의 등장 횟수 차감
        map.set(name, (map.get(name) - 1)); // e.g. { leo: 1, kiki: 0, eden: 0 }
    }
    
    // 결국 값이 1로, 남은 이름이 완주하지 못한 참가자
    for (const [name, count] of map.entries()) {
        if (count > 0) return name;
    }
}