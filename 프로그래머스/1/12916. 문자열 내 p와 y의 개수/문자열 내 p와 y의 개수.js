function solution(s){
    const array = s.toUpperCase().split("");
    
    const yCount = array.filter(a => a === "Y").length;
    const pCount = array.filter(a => a === "P").length;

    return yCount === pCount ? true : false;
}