// Certainly! Here are the array-related questions with sample inputs and expected outputs:

// Practical Array Interview Questions:
// Remove Duplicates from a Sorted Array:

// Problem: Remove duplicates from a sorted array in-place.
// Input: [1, 1, 2, 2, 3, 4, 4]
// Expected Output: New array length: 4, Array: [1, 2, 3, 4]

/*
Certainly! Here are the array-related questions with sample inputs and expected outputs:

### Practical Array Interview Questions:

1. **Remove Duplicates from a Sorted Array:**
   - **Problem:** Remove duplicates from a sorted array in-place.
   - **Input:** `[1, 1, 2, 2, 3, 4, 4]`
   - **Expected Output:** New array length: `4`, Array: `[1, 2, 3, 4]`
*/

function removeDup(a) {
  const hashTable = {};
  let length = 0;

  for (let val of a) {
    if (hashTable[val]) {
      continue;
    } else {
      hashTable[val] = true;
      length++;
    }
  }
  return length;
}

console.log(removeDup([1, 1, 2, 2, 3, 4, 4])); // 3mins

/*

2. **Find the Maximum Product of Two Integers in an Array:**
   - **Problem:** Find the maximum product of any two integers in an array.
   - **Input:** `[1, 10, -5, 1, -100]`
   - **Expected Output:** `500` (Product of `-5` and `-100`)

*/

function maxProd(a) {
  let l = 0;
  let r = a.length - 1;
  let maxProd = -Infinity;
  let currProd, leftVal, rightVal;

  while (l < r) {
    currProd = a[l] * a[r];

    leftVal = a[l] > 0 ? a[l] : -1 * a[l];
    rightVal = a[r] > 0 ? a[r] : -1 * a[r];

    if (leftVal < rightVal) {
      l++;
    } else {
      r--;
    }
    maxProd = currProd > maxProd ? currProd : maxProd;
  }
  return maxProd;
}

console.log("maxProd: " + maxProd([1, 10, -5, 1, -100])); //8 mins
/*

3. **Merge Two Sorted Arrays:**
   - **Problem:** Merge two sorted arrays into a single sorted array.
   - **Input:** `arr1 = [1, 3, 5]`, `arr2 = [2, 4, 6]`
   - **Expected Output:** `[1, 2, 3, 4, 5, 6]`

*/

function merge(leftArr, rigtArr) {
  const sortedArr = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < rigtArr.length) {
    if (leftArr[0] < rigtArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rigtArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rigtArr];
}

/*
function merge(leftArr, rightArr) {
    const sortedArr = [];
    let i = 0;
    let j = 0;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            sortedArr.push(leftArr[i]);
            i++;
        } else {
            sortedArr.push(rightArr[j]);
            j++;
        }
    }

    // Append the remaining elements from leftArr or rightArr
    while (i < leftArr.length) {
        sortedArr.push(leftArr[i]);
        i++;
    }

    while (j < rightArr.length) {
        sortedArr.push(rightArr[j]);
        j++;
    }

    return sortedArr;
}
*/

console.log(merge([1, 3, 5], [2, 4, 6])); // 3mins
/*

4. **Find the Missing Number:**
   - **Problem:** Find the missing number in an array containing numbers from `1` to `n`.
   - **Input:** `[1, 2, 4, 5, 6]`
   - **Expected Output:** `3`

*/

function missingNum(a) {
  const n = a.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  const arraySum = a.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - arraySum;
}

console.log(missingNum([1, 2, 4, 5, 6]));

/*

5. **Rotate an Array:**
   - **Problem:** Rotate an array by `k` steps to the right.
   - **Input:** `arr = [1, 2, 3, 4, 5, 6, 7]`, `k = 3`
   - **Expected Output:** `[5, 6, 7, 1, 2, 3, 4]`
*/

function rotateArray(a, k) {
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }
  return a;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

/*

6. **Check if Array is a Subsequence:**
   - **Problem:** Check if one array is a subsequence of another.
   - **Input:** `arr1 = [1, 3, 5]`, `arr2 = [1, 2, 3, 4, 5]`
   - **Expected Output:** `true`

*/

function isSubSeq(a1, a2) {
  return a1.every((v) => a2.includes(v));
}

function isSubSeqTwoPointer(a1, a2) {
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] === a2[j]) {
      i++;
    }
    j++;
  }
  return a1.length === i;
}

console.log(isSubSeqTwoPointer([1, 3, 5], [1, 2, 3, 4, 5])); //used ChatGPT

/*

7. **Find the First Unique Element:**
   - **Problem:** Find the first non-repeating element in an array.
   - **Input:** `[9, 2, 3, 2, 6, 6, 7]`
   - **Expected Output:** `9`
*/

function firstUniqe(a) {
  for (let i = 0; i < a.length; i++) {
    if (i === a.lastIndexOf(a[i])) {
      return a[i];
    }
  }
}

console.log(firstUniqe([9, 2, 3, 2, 6, 6, 7])); //3min

/*

8. **Longest Consecutive Sequence:**
   - **Problem:** Find the length of the longest consecutive elements sequence.
   - **Input:** `[100, 4, 200, 1, 3, 2]`
   - **Expected Output:** `4` (The sequence is `[1, 2, 3, 4]`)
*/

function longestConsecutiveSeq(a) {
  a.sort((a, b) => a - b);

  let longest = 0;
  let count;
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    if (a[i] == a?.[i - 1] + 1) {
      count++;
    } else {
      count = 1;
    }
    longest = count > longest ? count : longest;
  }
  return longest;
}

console.log(longestConsecutiveSeq([100, 4, 200, 1, 3, 2]));

/*

9. **Move Zeros to the End:**
   - **Problem:** Move all zeros in an array to the end.
   - **Input:** `[0, 1, 0, 3, 12]`
   - **Expected Output:** `[1, 3, 12, 0, 0]`
*/

function moveZeros(a) {
  let i = 0;
  let j = a.length - 1;
  while (i < j) {
    if (a[i] === 0 && a[j] != 0) {
      [a[i], a[j]] = [a[j], a[i]];
    }
    if (a[i] != 0) {
      i++;
    }
    if (a[j] == 0) {
      j--;
    }
  }
  return a;
}

console.log(moveZeros([0, 1, 0, 3, 12]));

/*

10. **Find the Intersection of Two Arrays:**
    - **Problem:** Find the intersection of two arrays.
    - **Input:** `arr1 = [1, 2, 2, 1]`, `arr2 = [2, 2]`
    - **Expected Output:** `[2, 2]`

*/

function intersection(a1, a2) {
  let A1,
    A2,
    ans = [];
  if (a1.length < a2.length) {
    A1 = a1;
    A2 = a2;
  } else {
    A1 = a2;
    A2 = a1;
  }

  for (let i = 0; i < A1.length; i++) {
    if (A2.includes(A1[i])) {
      ans.push(A1[i]);
    }
  }

  return ans;
}

function intersectionHash(a1, a2) {
  const [smaller, larger] = a1.length < a2.length ? [a1, a2] : [a2, a1];
  const hashTable = {};
  const ans = [];

  for (let val of smaller) {
    hashTable[val] = true;
  }

  for (let val of larger) {
    if (hashTable[val]) {
      ans.push(val);
    }
  }
  return ans;
}

console.log(intersectionHash([1, 2, 2, 1], [2, 2]));

/*

### Questions Related to Logic:

1. **Palindrome Check:**
   - **Problem:** Determine if an array forms a palindrome.
   - **Input:** `[1, 2, 3, 2, 1]`
   - **Expected Output:** `true`
*/

function isPalindrome(a) {
  let i = 0;
  let j = a.length - 1;

  while (i < j) {
    if (a[i] != a[j]) {
      return false;
    }

    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome([1, 2, 3, 2, 1])); //3mins

/*

2. **Array Partitioning:**
   - **Problem:** Partition an array into two subarrays with the same sum.
   - **Input:** `[1, 2, 3, 4, 5, 5]`
   - **Expected Output:** `[1, 2, 3, 4] and [5, 5]`

*/

/*

3. **Sort an Array of 0s, 1s, and 2s:**
   - **Problem:** Sort an array consisting only of `0s`, `1s`, and `2s`.
   - **Input:** `[2, 0, 2, 1, 1, 0]`
   - **Expected Output:** `[0, 0, 1, 1, 2, 2]`
*/

/*

4. **Find All Pairs with a Given Sum:**
   - **Problem:** Find all pairs of numbers that add up to a given sum.
   - **Input:** `arr = [1, 5, 7, -1, 5]`, `sum = 6`
   - **Expected Output:** Pairs: `(1, 5)`, `(7, -1)`, `(1, 5)`

5. **Rainwater Trapping Problem:**
   - **Problem:** Compute how much water it can trap after raining.
   - **Input:** `[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]`
   - **Expected Output:** `6`

6. **Find the Majority Element:**
   - **Problem:** Find the element that appears more than `n/2` times.
   - **Input:** `[2, 2, 1, 1, 1, 2, 2]`
   - **Expected Output:** `2`

7. **Find the Maximum Subarray Sum (Kadane’s Algorithm):**
   - **Problem:** Find the contiguous subarray with the largest sum.
   - **Input:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`
   - **Expected Output:** `6` (Subarray: `[4, -1, 2, 1]`)

8. **Check for a Circular Array Loop:**
   - **Problem:** Check if there exists a circular loop in the array.
   - **Input:** `[2, -1, 1, 2, 2]`
   - **Expected Output:** `true`

9. **Find the Minimum Number of Platforms Required:**
   - **Problem:** Find the minimum number of platforms required at the station.
   - **Input:** `arrivals = [9.00, 9.40, 9.50, 11.00, 15.00, 18.00]`, `departures = [9.10, 12.00, 11.20, 11.30, 19.00, 20.00]`
   - **Expected Output:** `3`

10. **Find the Smallest Subarray with a Given Sum:**
    - **Problem:** Find the minimal length of a contiguous subarray with sum ≥ `S`.
    - **Input:** `arr = [2, 3, 1, 2, 4, 3]`, `S = 7`
    - **Expected Output:** `2` (Subarray: `[4, 3]`)

These questions will test your ability to implement algorithms, optimize solutions, and handle various scenarios in array manipulation.

*/

/*
Here are some commonly asked array and string questions in JavaScript interviews that can typically be solved within 10 minutes:

### Array Questions

1. **Remove Duplicates from an Array**:
   - **Problem**: Given an array, remove all duplicate values.
   - **Example**: `Input: [1, 2, 2, 3, 4, 4]` → `Output: [1, 2, 3, 4]`

*/

function removeDup2(a) {
  return a.filter((v, i) => a.lastIndexOf(v) === i);
}

function removeDup3(a) {
  const hashTable = {},
    ans = [];

  for (let val of a) {
    hashTable[val] = true;
  }

  for (let key in hashTable) {
    ans.push(Number(key));
  }
  return ans;
}

console.log(removeDup2([1, 2, 2, 3, 4, 4]));
console.log(removeDup3([1, 2, 2, 3, 4, 4]));

/*

2. **Find the Maximum Product of Two Integers in an Array**:
   - **Problem**: Given an array of integers, find the maximum product of any two integers.
   - **Example**: `Input: [1, 10, -5, 1, -100]` → `Output: 500` (from -5 * -100)
*/

function maxProd2(a) {
  let maxP = -Infinity;
  let prod;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      prod = a[i] * a[j];
      if (prod > maxP) {
        maxP = prod;
      }
    }
  }
  return maxP;
}

console.log(maxProd2([1, 10, -5, 1, -100]));

/*

3. **Move Zeros to the End**:
   - **Problem**: Given an array, move all zeros to the end while maintaining the order of non-zero elements.
   - **Example**: `Input: [0, 1, 0, 3, 12]` → `Output: [1, 3, 12, 0, 0]`

*/

function moveZeros2(a) {
  let l = 0;
  let r = a.length - 1;

  while (l < r) {
    if (a[l] === 0 && a[r] != 0) {
      [a[l], a[r]] = [a[r], a[l]];
    }

    if (a[r] == 0) {
      r--;
    }

    if (a[l] != 0) {
      l++;
    }
  }
  return a;
}

console.log(moveZeros2([0, 1, 0, 3, 12]));

/*

4. **Two Sum**:
   - **Problem**: Find two numbers in an array that add up to a specific target.
   - **Example**: `Input: [2, 7, 11, 15], target = 9` → `Output: [0, 1]` (because 2 + 7 = 9)
*/

function mergeSort(a) {
  if (a.length < 2) return a;

  const m = Math.floor(a.length / 2);
  const leftArr = a.slice(0, m);
  const rightArr = a.slice(m);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

function twoSum(a, t) {
  a = mergeSort(a);

  let l = 0;
  let r = a.length - 1;

  while (l <= r) {
    if (a[l] + a[r] === t) {
      return [l, r];
    } else if (a[l] + a[r] < t) {
      l++;
    } else {
      r--;
    }
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));

/*
5. **Reverse an Array**:
   - **Problem**: Reverse the elements of an array in place.
   - **Example**: `Input: [1, 2, 3, 4, 5]` → `Output: [5, 4, 3, 2, 1]`

*/

function revArr(a) {
  let l = 0;
  let r = a.length - 1;

  while (l <= r) {
    [a[l], a[r]] = [a[r], a[l]];
    l++;
    r--;
  }
  return a;
}

console.log(revArr([1, 2, 3, 4, 5]));

/*

### String Questions

1. **Reverse a String**:
   - **Problem**: Reverse the given string.
   - **Example**: `Input: "hello"` → `Output: "olleh"`

*/

function revStr(str) {
  let ans = "";

  for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }
  return ans;
}

console.log(revStr("hello"));

/*

2. **Check for Palindrome**:
   - **Problem**: Check if a given string is a palindrome.
   - **Example**: `Input: "racecar"` → `Output: true`

*/

const inputLine581 = "racecar";
console.log(inputLine581.split("").reverse().join("") == inputLine581);

function isPalindrome2(str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr === str;
}

console.log(isPalindrome2("racecar"));

/*

3. **First Non-Repeating Character**:
   - **Problem**: Find the first non-repeating character in a string.
   - **Example**: `Input: "swiss"` → `Output: "w"`

*/

function firstNonRep(str) {
  const hashTable = {};
  for (let char of str) {
    if (hashTable[char]) {
      hashTable[char]++;
    } else {
      hashTable[char] = 1;
    }
  }
  for (let char of str) {
    if (hashTable[char] == 1) {
      return char;
    }
  }
}

console.log(firstNonRep("swiss"));

/*

4. **Count Vowels and Consonants**:
   - **Problem**: Count the number of vowels and consonants in a string.
   - **Example**: `Input: "hello"` → `Output: Vowels: 2, Consonants: 3`

*/

function countVowCon(str) {
  let vowCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (/[aeiou]/.test(char)) {
      vowCount++;
    } else {
      consonantCount++;
    }
  }
  return { vowCount, consonantCount };
}

console.log(countVowCon("hello"));

/*

5. **Anagram Check**:
   - **Problem**: Determine if two strings are anagrams of each other.
   - **Example**: `Input: "listen", "silent"` → `Output: true`

These problems are frequently asked in interviews and can be solved quickly with practice.
*/

const inputLine654 = "listen";
const inputLine655 = "silent";

console.log(
  inputLine654.split("").sort().join("") ===
    inputLine655.split("").sort().join("")
);

function isAnagram(s1, s2) {
  if (s1.length != s2.length) return false;

  const alphabets1 = new Array(26).fill(0);
  const alphabets2 = new Array(26).fill(0);
  let ind;

  for (let i = 0; i < s1.length; i++) {
    ind = s1.charCodeAt(i) - 97;
    alphabets1[ind]++;
  }
  for (let i = 0; i < s2.length; i++) {
    ind = s2.charCodeAt(i) - 97;
    alphabets2[ind]++;
  }
  for (let i = 0; i < 26; i++) {
    if (alphabets1[i] != alphabets2[i]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("listen", "silent"));
