// 1. Contains Duplicate
//  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let containsDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i], nums[i + 1]);
    if (nums[i] === nums[i + 1]) {
      return true;
    } else {
      nums[i]++;
    }
  }
  return false;
};

console.log(containsDuplicate([2, 4, 5, 4]));
