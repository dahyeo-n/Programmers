function solution(numbers, num1, num2) { 
    let sliceArray = [];
    sliceArray = numbers.slice(num1, num2 + 1);
    
    return sliceArray;
}