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

// console.log(containsDuplicate([8, 4, 5, 6, 5]));

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


// console.log(containsDuplicate2([8, 4, 5, 6]));


////////////////////////////////////////////////////////////

// 2. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

let isAnagram = (s, t) =>{
    let firstWord = s.split('').sort().join('')
    let secondWord = t.split('').sort().join('')
    if(firstWord.length !== secondWord.length) return false
    return firstWord === secondWord ?  true : false
    
    
}

// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));
// console.log(isAnagram('alex', 'xela'));

// Second solution

let isAnagram2 = (first, second) =>{
    if(first.length !== second.length) return false

    const lookup = {}

    for (let i in first) {
        let letter = first[i]
        lookup[letter] ? lookup[letter] ++ : lookup[letter] = 1
    }

    for (let i in second) {
        let letter = second[i]
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter] --
        }
    }
    return true

}

// console.log(isAnagram2('anagram', 'nagaram'));
// console.log(isAnagram2('rat', 'car'));
// console.log(isAnagram2('alex', 'xela'));


// 3 Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

let twoSum = (nums, target) =>{
    let totals = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                // console.log(nums[i], nums[j]);
                totals.push(nums[i], nums[j])
            }
        }
    }
    return totals
}

console.log(twoSum([7,11,2,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));