const solution = (arr1, arr2) => {
    return arr1.map((row) => // arr1의 행마다
        arr2[0].map((_, cIdx) => // arr2의 열의 개수만큼 연산을 진행
            // arr1의 i행에서 열의 인덱스 == arr2의 j열에서 행의 인덱스(rIdx)인 같은 원소끼리 곱하여 더해주기
            // acc는 reduce문으로 더해지는 값을 저장하는 누산기 변수
            // cur은 arr1의 한 행의 현재 값으로 첫 번째 for문을 활용한 풀이에서 arr1[i][k]와 같은 값을 가리킴
            // arr2[rIdx][cIdx]는 첫 번째 for문을 활용한 풀이에서 arr2[k][j]와 같은 값을 가리킴
            row.reduce((acc, cur, rIdx) =>
                acc + cur * arr2[rIdx][cIdx]
            , 0)
        )
    );
}