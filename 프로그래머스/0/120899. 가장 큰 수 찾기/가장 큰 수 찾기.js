function solution(array) {
    let mathMax = Math.max(...array)
    let answer = [mathMax, array.indexOf(mathMax)];
    
    return answer;
}