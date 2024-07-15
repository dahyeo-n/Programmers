function solution(age) {
    // (1) age를 문자열로 변경한 후, 배열로 만듦
    const arr = age.toString().split('');
    const alphabet = 'abcdefghij';
    
    // (2) map으로 하나씩 순회하며 문자열 해당 위치의 요소를 담은 배열 반환
    return arr.map(v => alphabet[v]).join('');
}