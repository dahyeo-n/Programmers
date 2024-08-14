process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for (let i = 0; i < b; i++) {
        let str = "";
        for (let j = 0; j < a; j++) { // 별을 한 줄에 몇 개 찍으며 반복할지
            str = str + "*" // 출력할 변수에 별 담음
        }
        
         console.log(str);
    }
});
