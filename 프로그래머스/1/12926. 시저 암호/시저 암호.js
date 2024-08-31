// 시저 암호: 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식
function solution (s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        let text = s[i];
        if (text == ' ') {
            answer += ' ';
            continue;
        }
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text) + n;
        if (index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}