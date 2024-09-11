function solution(s) {
    const numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for (let i = 0; i < numWords.length; i++) {
        const regex = new RegExp(numWords[i], 'g'); // 해당 영단어를 찾기 위한 정규표현식
        s = s.replace(regex, i);
    }
    
    return Number(s);
}