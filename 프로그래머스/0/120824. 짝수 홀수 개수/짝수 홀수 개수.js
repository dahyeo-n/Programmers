function solution(num_list) {
    const obj = { 'even': 0, 'odd': 0}
      
    for (i = 0; i < num_list.length; i++) {
        num_list[i] % 2 === 0 ? obj['even'] += 1 : obj['odd'] += 1
    }
            
    return [obj['even'], obj['odd']];
}