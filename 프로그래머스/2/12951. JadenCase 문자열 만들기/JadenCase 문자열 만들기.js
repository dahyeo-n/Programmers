function solution(s) {
    const words = s.split(' ')
    .map(word => word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase());

    return words.join(' ');
}