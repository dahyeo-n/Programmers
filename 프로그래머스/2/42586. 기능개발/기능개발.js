function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    // j는 answer 배열의 인덱스
    for (let i = 0, j = 0; i < days.length; i++) {
        if (days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            // j를 1 증가시켜서 새로운 인덱스로 이동한 뒤 answer[j]에 1을 넣음
            answer[++j] = 1;
        }
    }

    return answer;
}