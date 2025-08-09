function solution(new_id) {
    // 1단계: 소문자로 치환
    let id = new_id.toLowerCase();
    
    // 2단계: 허용되지 않은 문자 제거
    id = id.replace(/[^a-z0-9-_.]/g, '');
    
    // 3단계: 마침표 2번 이상 → 1개로
    id = id.replace(/\.{2,}/g, '.');
    
    // 4단계: 처음/끝 마침표 제거
    id = id.replace(/^\.|\.$/g, '');
    
    // 5단계: 빈 문자열이면 'a'
    if (id === '') id = 'a';
    
    // 6단계: 16자 이상이면 15자까지 자름
    if (id.length >= 16) {
        id = id.slice(0, 15).replace(/\.$/, ''); // 끝이 '.'이면 제거
    }
    
    // 7단계: 길이 2 이하라면 마지막 문자 반복
    while (id.length < 3) {
        id += id[id.length - 1];
    }
    
    return id;
}
