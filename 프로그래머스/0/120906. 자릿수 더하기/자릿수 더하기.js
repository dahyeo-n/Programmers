function solution(n) {
    // (1) 문자열로 바꾸고 split으로 문자를 쪼개 배열로 만듦
    // (2) reduce로 각 자릿수의 합 구함
    // (3) cur 값은 문자열이기 때문에 숫자로 처리 (* 1)
	return String(n).split('').reduce((acc, cur) => acc + cur * 1, 0);
}