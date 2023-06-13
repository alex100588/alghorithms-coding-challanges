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

console.log(containsDuplicate([8, 4, 5, 6, 5]));

// Second approach O(n2)
let containsDuplicate2 = (array) =>{
    for (let i = 0; i < array.length; i++) {
        for(let j = i+1; j<array.length; j++){
            // console.log(array[i], array[j]);
            if(array[i] === array[j]){
                return true
            }
        }
    }
    return false
}


console.log(containsDuplicate2([8, 4, 5, 6]));