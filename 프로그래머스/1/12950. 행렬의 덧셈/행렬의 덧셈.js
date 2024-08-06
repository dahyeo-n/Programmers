function solution(arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let sum = [];

        for (let j = 0; j < arr1[i].length; j++) {
            sum.push(arr1[i][j] + arr2[i][j]) // push()로 sum 배열 끝에 값을 하나씩 더함
        }

        answer.push(sum) // answer 배열에 sum의 값 모두 넣음
    }
    
    return answer;
}