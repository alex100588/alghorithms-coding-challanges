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

// console.log(twoSum([7,11,2,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));


// 4. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

let groupAnagram = (strs) =>{
    let sorted = strs.map(str => str.split('').sort().join(''))
    const map = {}
//    console.log(sorted);
    for (let i = 0; i < sorted.length; i++) {
        // console.log(sorted);
        if(!map[sorted[i]]){
            map[sorted[i]] = [sorted[i]]
        }else{
            map[sorted[i]].push(sorted[i])
        }
    }

    return map
}

// console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]));

// 5 Numbers repeated
// Given an integer array nums return all numbers that are repeated .

let repeatedNums = (arr) =>{
    let nums = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                nums.push(arr[i])
            }
        }
    }
    return new Set(nums)
}

// console.log(repeatedNums([1,1,1,2,2,3]));


// 6. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


let topKFrequent =(nums, k) =>{
    let map = {}
    for (let num of nums){
        // console.log(num);
        if(!map[num]){
            map[num] = 1
        }else{
            map[num]++
        }
        
    }
    
    let sorted = Object.entries(map).sort((a, b) => b[1] - a[1])

    let result = []
    for(let [i, key, value] of sorted.entries()){
        // console.log(i, key, value);
        result.push(key[0])
    }

    
    return result.slice(0, k)
};

console.log(topKFrequent([30, 10,10,10,20,20,], 2));
console.log(topKFrequent([30, 10,10,10,20,20,20, 50,50,50,50,50,50,12,12,12,12,12,12], 3));