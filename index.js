function hasTargetSum(array, target) {
  // Write your algorithm here
  let targetSum = false
  for (let i = 0; i <= array.length; i++) {
    if (array.includes(target - array[i]) && array.indexOf(target - array[i]) !== i){
      return true
    }
  }

  return false

}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
iterate over array 
  if the array includes the difference of target minue the array at index of i and the difference does not = i
    return true
  else
    return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
