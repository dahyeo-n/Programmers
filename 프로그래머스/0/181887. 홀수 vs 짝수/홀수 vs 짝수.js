function solution(num_list) {
    let even = 0;
    let odd = 0;

    num_list.map((n, idx) => {
        !(idx % 2) ? even += n : odd += n;
    })

    return odd > even ? odd : even; 
}