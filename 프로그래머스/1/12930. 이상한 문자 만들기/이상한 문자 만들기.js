function solution (s) {
    const alphabet = s.split(' ');
    const newWords = alphabet.map((a) => {
        let result = '';
        for (let i = 0; i < a.length; i++) {
            // 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꿈
            if (i % 2 === 0) result += a[i].toUpperCase();
            if (i % 2 !== 0) result += a[i].toLowerCase();
        }
        return result;
    })
    return newWords.join(' ');
}