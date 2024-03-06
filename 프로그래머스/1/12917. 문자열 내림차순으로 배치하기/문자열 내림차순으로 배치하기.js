// 문자열을 split메소드를 사용하여 배열로 쪼갠다.
// sort 메소드로 순차적으로 나열해준다.
// reverse메소드로 반전시켜준다.
// join 메소드로 문자열로 바꿔서 반환한다.

function solution(s) {
    return s.split('').sort().reverse().join('');
}