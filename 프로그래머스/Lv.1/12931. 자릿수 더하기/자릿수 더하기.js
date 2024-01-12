function solution(n)
{
   const answer = String(n).split('').reduce((acc,val) => acc + Number(val),0)
   return answer
}