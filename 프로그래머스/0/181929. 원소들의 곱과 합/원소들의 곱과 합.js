function solution(num_list) {
    const mul = num_list.reduce((a, c) => a * c, 1);
    const sum = num_list.reduce((a, c) => a + c, 0);
    return mul < sum * sum ? 1 : 0;
}