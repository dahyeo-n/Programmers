// 1 ~ n 순회
function solution(n) {
    let answer = 0
    for (let i = 1; i <= n; i++){
        if (n % i === 0)
            answer += i
    }
    return answer
}

// 1 ~ Math.sqrt(n) 미만 순회
function solution(n) {
    const stack = []
    for (let i = 1; i < Math.sqrt(n); i++) {
        if (n % i === 0)
            stack.push(i)
    }

    let answer = 0
    stack.forEach(v => {
        answer += (v + n / v)
    })
    answer += (Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : 0)
    return answer
}