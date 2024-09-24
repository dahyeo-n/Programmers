function solution (elements) {
    let answer = 0;
    let set = new Set();
    
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = 1; j <= elements.length; j++) {
            sum += elements[(i + j - 1) % elements.length];
            set.add(sum);
        }
    }
    
    return set.size;
}