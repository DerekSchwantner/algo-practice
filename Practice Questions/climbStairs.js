// You are climbing a staircase that has n steps. You can take the steps either 1 or 2 at a time. Calculate how many distinct ways you can climb to the top of the staircase.

// climbing stairs is a fibonacci sequence, here we use a bottom up approach
function climbingStairs(n) {
  let arr = [];
  arr[0] = 1;
  arr[1] = 1;
  console.log(arr);
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
