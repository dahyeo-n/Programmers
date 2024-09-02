function solution (brown, yellow) {
    let answer = [];
    let sum = brown + yellow;
    
    for (let height = 3; height <= brown; height++) {
        if (sum % height === 0) {
            let width = sum / height;
            
            // 테두리를 제외한 길이를 구해야 하기 때문에 각각 -2 해준 뒤, 곱셈
            if ((height - 2) * (width - 2) === yellow) {
                return [width, height];
            }
        }
    }
    
    return answer;
}