function solution(my_string) {
    return my_string.split("")
        .filter((str, idx, arr) => {
            return arr.indexOf(str) === idx;
    }).join("");
}