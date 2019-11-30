// const threeSum = function(nums) {
//   let ht = new Map();
//   let trueCount = [];
//   let gotTriplet = false;
//
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; i < nums.length; j++) {
//       for (let k = j + 1; i < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           gotTriplet = true;
//           trueCount.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }
//   if (gotTriplet === false) {
//     return [];
//   } else {
//     return trueCount;
//   }
// };

const arr = [-1, 0, 1, 2, -1, -4];


//this version has 3 pointers at once [-4, -1 -1, 0, 1, 2].
//                                      ^   ^           ^
const threeSum = function(nums) {
  let trueCount = [];
  //regular .sort() will not work here without parameters. When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
  nums.sort(function(a, b){return a-b})

  for (let i = 0; i < nums.length -3; i++){
    if (i === 0 || nums[i] > nums[i-1]){
      let start = i + 1
      let end = nums.length - 1

      while (start < end) {
        //if located triplet is zero, push to the results array
        if (nums[i] + nums[start] + nums[end] === 0){
          trueCount.push([nums[i], nums[start], nums[end]])
        }
        //checking if each loop sum is larger than the target value
        if (nums[i] + nums[start] + nums[end] < 0) {
          let currentStart = start
          while (nums[start] === nums[currentStart] && start < end) {
            start++
          }

        } else {
          let currentEnd = end
          while (nums[end] === nums[currentEnd] && start < end) {
            end--
          }
        }
      }

    }
  }
  return trueCount
};

console.log(threeSum(arr));
