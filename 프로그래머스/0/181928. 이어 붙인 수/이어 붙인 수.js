function solution(num_list) {
    let oddNumber = num_list.filter(num => num % 2 === 1);
    let evenNumber = num_list.filter(num => num % 2 === 0);
    
    return Number(oddNumber.join('')) + Number(evenNumber.join(''));
}