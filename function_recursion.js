function multiply(arr, n) {

    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }

}   //end multiply
  
function sum(arr, n) {
  
  if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) +
       arr[n - 1];
    }

}   //end sum
  
console.log(multiply([4,2,5,8,9], 3));
console.log(sum([4,2,5,8,9], 3));