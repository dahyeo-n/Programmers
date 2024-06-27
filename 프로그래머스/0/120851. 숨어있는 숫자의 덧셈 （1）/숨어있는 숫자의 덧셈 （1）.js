const solution = (my_string) => 
    // Array.from(my_string)을 사용하여 문자열을 배열로 변환
    Array.from(my_string)

    // filter 메서드를 이용하여 숫자만 남기도록 필터링
    .filter(char => !isNaN(parseInt(char)))

    // reduce 메서드를 사용하여 남은 숫자들의 합을 구함
    .reduce((acc, num) => acc + parseInt(num), 0);