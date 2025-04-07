function solution(lottos, win_nums) {
  const correct = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  const zeros = lottos.filter((lotto) => lotto === 0).length;

  const minGrade = 7 - correct >= 6 ? 6 : 7 - correct;
  const maxGrade = minGrade - zeros < 1 ? 1 : minGrade - zeros;

  return [maxGrade, minGrade];
}