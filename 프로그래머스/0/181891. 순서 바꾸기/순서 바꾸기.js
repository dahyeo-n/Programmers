function solution(num_list, n) {
    // concat으로 두 배열 합침
    return num_list.slice(n).concat(num_list.slice(0, n));
}