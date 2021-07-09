// The logic to get factorial is using IfElse
function Factorial() {
  let n = parseInt(prompt("Enter Value"));
function factorial(n) { //We are use factorial as a function
  if (n==0) {
    return 1;
  } else {
    return factorial(n-1)*n; //This will return the value until If condition is not met
  }
}
console.log(factorial(n)); //This will print the answer of n!
}
Factorial();
