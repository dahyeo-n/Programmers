function solution (s) {
    const words = s.split(" "); // 공백을 기준으로 문자열을 배열로 변환
    const result = [];
    
    for (let i = 0; i < words.length; i++) {
        let convertedWord = [];
        
        // 각 단어를 반복
        for (let j = 0; j < words[i].length; j++) {
            const char = words[i][j];
            
            (j % 2) === 0 // 짝수 인덱스 → 대문자
                ? convertedWord.push(char.toUpperCase())
                : convertedWord.push(char.toLowerCase()); // 홀수 인덱스 → 소문자
        }
        
        result.push(convertedWord.join("")); // 배열을 다시 문자열로 합침
    }
    
    return result.join(" "); // 단어 사이에 공백 추가
}