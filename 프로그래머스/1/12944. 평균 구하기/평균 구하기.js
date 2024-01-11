function solution(arr) {
    const arrLength = arr.length
    const answer = arr.reduce((acc,val)=>acc+val,0) / arrLength
    return answer;
}