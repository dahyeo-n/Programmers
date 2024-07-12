function solution(my_string) {
    // (1) my_string에서 'a', 'e', 'i', 'o', 'u'를 포함하는 모든 문자를 찾아 빈 문자열('')로 대체
    // (2) g 플래그(global)로 문자열 전체에서 해당 패턴을 반복적으로 찾아 모두 대체
    return my_string.replace(/[aeiou]/g, '')
}