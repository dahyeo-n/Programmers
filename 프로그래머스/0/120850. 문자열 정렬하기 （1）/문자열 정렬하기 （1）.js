function solution(my_string) {
  return my_string
    .match(/\d/g)
    .map((num) => Number(num))
    .sort();
}