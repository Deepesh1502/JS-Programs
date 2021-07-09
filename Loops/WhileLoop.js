//Program to display numbers
function WhileLoop() {
//initialize the variable
  let i = parseInt(prompt("Enter initial"));
  let n = parseInt(prompt("Enter Final"));
while(i<=n) {
  console.log(i);
//this will print the value of variable (i)
//till the condition is not met

  i+=1;//The part i+=1 will increase the value of i by 1
}
}
WhileLoop();
