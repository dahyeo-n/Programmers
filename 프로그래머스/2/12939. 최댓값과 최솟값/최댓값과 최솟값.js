function solution(s) {
    // (1) 공백 기준으로 s를 자르기 (split())
	const arr = s.split(' ');
    
    // (2) 최소값과 최대값 사이에 공백을 두고 합치기
    return Math.min(...arr) + ' ' + Math.max(...arr)
}