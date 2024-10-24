function solution(numbers) {
    const N = numbers.length;
    numbers.sort((a,b) => a - b);

    return Math.max(
        numbers[N-1] * numbers[N-2],
        numbers[0] * numbers[1]
    )
}