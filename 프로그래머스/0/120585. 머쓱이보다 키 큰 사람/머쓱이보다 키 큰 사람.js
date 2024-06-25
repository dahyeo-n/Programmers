function solution(array, height) {
    // array(머쓱이네 반 친구들의 키)에서 height(머쓱이 키)보다 큰 사람의 length를 반환
    var answer = array.filter((friendHeight) => friendHeight > height).length;
    return answer;
}