function solution(sizes) { // 2차원 배열 sizes
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        let [w, h] = sizes[i];
        
        if (w < h) [w, h] = [h, w]; // 가로와 세로 중 긴 쪽을 가로(w)로, 짧은 쪽을 세로(h)로 설정
        maxWidth = Math.max(maxWidth, w);
        maxHeight = Math.max(maxHeight, h);
    }
    return maxWidth * maxHeight;
}
