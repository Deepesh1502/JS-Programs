/*The If-Else If statement is used if
The condition is same but having different values
To run different code blocks
The code is also an example for Nested-If statement
*/
function IfElseIf() {
  let n=parseInt(prompt("Enter number from 1 to 5"));

/*The condition is used to compare
A range of number with the user input value
*/
if (n<6)
  if (n==5)
    console.log("You have entered 5");
  else if (n==4)
    console.log("You have entered 4");
  else if (n==3)
    console.log("You have entered 3");
  else if (n==2)
    console.log("You have entered 2");
  else if (n==1)
    console.log("You have entered 1");
  else
    console.log("You have entered 0 or a negative number");
else
  console.log("Number is greater than 5");
}
IfElseIf();
