// The logic to get factorial is using IfElse statement with return
// Return is a loop which execute one time in a program
function factorial(n) { //We are use factorial as a function
  if (n==0) {
    return 1;
  } else {
    return factorial(n-1)*n; //This will return the value until If condition is not met
  }
}
console.log(factorial(4)); //This will print the answer of 4!
//You can change the 4 into any positive number to get output
