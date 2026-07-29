import { logger } from "#utils/log-util";

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const wanted = target - nums[i];

    if (map.has(wanted)) {
      return [map.get(wanted)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

logger(twoSum, [2, 7, 11, 15], 26);
