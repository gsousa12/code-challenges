function longestConsecutive(nums: number[]): number {
  if (nums.length === 0 || nums === null) {
    return 0;
  }

  let set = new Set(nums);
  let max = 0;

  for (let num of set) {
    console.log(`------Inicio do for-------`);
    if (set.has(num - 1)) {
      console.log(`Entrou no continue: ${num}`);
      continue;
    }

    let currentNum = num;
    let currentMax = 1;
    console.log(`currentNum01: ${currentNum}`);
    console.log(`currentMax01: ${currentMax}`);

    while (set.has(currentNum + 1)) {
      console.log(`Entrou no white: ${currentNum}`);
      currentNum++;
      currentMax++;
      console.log(`currentNum02: ${currentNum}`);
      console.log(`currentMax02: ${currentMax}`);
    }

    max = Math.max(max, currentMax);
    console.log(`Max01: ${max}`);
  }

  return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
