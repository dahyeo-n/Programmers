function solution(n) {
    // n.toString(2)은 숫자 n을 2진수로 변환
    // split("1")은 2진수 문자열을 "1"을 기준으로 나눠 배열로 만듦
    let oneNum = n.toString(2).split("1").length; // 2진수로 변환된 값의 1의 개수 찾음
    
    while (true) {
        n++;
        //  1의 개수가 oneNum과 동일하다면, 그 수를 반환
        if (n.toString(2).split("1").length === oneNum) return n;
    }
}