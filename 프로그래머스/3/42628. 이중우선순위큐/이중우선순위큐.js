function solution(operations) {
    const heap = [];
    const op = operations.map(operation => operation.split(' '));
    // 배열[0] = 명령어, 배열[1] = 숫자로 접근 가능
    
    op.forEach(num => {
        if (num[0] === 'I') { // 명령어가 I라면 데이터 삽입
            heap.push(Number(num[1]))
        } else { // 그 외의 경우, 즉 명령어가 D인 경우
            const findValue = (num[1] === '1' ? Math.max : Math.min)(...heap);
          	// 숫자가 1이라면 max값, -1이라면 min값 적용
            const delIdx = heap.indexOf(findValue); // 찾고자 하는 값의 인덱스를 찾아서
            heap.splice(delIdx, 1); // (이름만 heap인) 배열에서 해당 인덱스의 원소 제거
        }
    })
    
    return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}