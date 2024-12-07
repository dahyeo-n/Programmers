function solution(a, b) {
    let aPlusb = parseInt(a.toString() + b.toString());
    let bPlusa = parseInt(b.toString() + a.toString());
    
    return aPlusb > bPlusa ? aPlusb : bPlusa;
}