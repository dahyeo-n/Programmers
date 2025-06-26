function solution(food) {
    let foodPlacement = "0"; // 가운데 물 1개

    for (let i = food.length - 1; i > 0; i--) {
        let currFood = food[i];

        // 홀수면 -1 해서 짝수로 만듦
        if (currFood % 2 === 1) currFood -= 1;

        // 절반만큼 왼쪽과 오른쪽 양끝에 배치
        const halfFood = currFood / 2;
        // repeat(): 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열 반환
        const foodStr = String(i).repeat(halfFood);
        foodPlacement = foodStr + foodPlacement + foodStr;
    }

    return foodPlacement;
}