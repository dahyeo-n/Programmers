function solution(babbling) {
  const possibleSounds = ['aya', 'ye', 'woo', 'ma'];
  let answer = 0;

  for (let bab of babbling) {
    // 연속 발음을 체크하여 제거
    const hasConsecutiveSounds = possibleSounds.some(sound => bab.includes(sound.repeat(2)));
    if (hasConsecutiveSounds) continue; // 연속 발음이 있으면 다음 bab로 넘어감

    // 발음 제거
    for (let sound of possibleSounds) {
      bab = bab.split(sound).join(' '); // 해당 발음을 공백으로 대체
    }

    // 모든 발음이 제거됐는지 확인
    if (bab.trim().length === 0) answer++;
  }

  return answer;
}