function solution(my_string) {
  let answer = [];
  let strLength = my_string.length;

  for (let i = 0; i < strLength; i++) {
    answer.push(my_string.slice(i, strLength));
  }

  return answer.sort();
}