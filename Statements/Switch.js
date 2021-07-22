/*The Switch statement works on the value
of condition or expression.

The case condition must be matched with the
value of switch condition or expression

Since JavaScript is case sensitive program
use different variables for different case block
like i1, n1, i2, n2, i3, n3.
*/
function Switch() {
  console.log("1. For Loop");
  console.log("2. While Loop");
  console.log("3. Do While Loop");
  let a = parseInt(prompt("Enter a option"));
 
// Variable a is the expression in the Switch statement 
  switch(a) {
    case 1:
      console.log("Using For Loop");
      let i1 = parseInt(prompt("Enter Initial Value:"));
      let n1 = parseInt(prompt("Enter Final Value:"));
      for (i1;i1<=n1;i1++) {
      console.log(i1);
      }
      break;
    case 2:
      console.log("Using While Loop");
      let i2 = parseInt(prompt("Enter Initial Value:"));
      let n2 = parseInt(prompt("Enter Final"));
      while(i2<=n2) {
      console.log(i2);
      i2+=1;
      }
      break;
    case 3:
      console.log("Using Do While Loop");
      let i3 = parseInt(prompt("Enter Initial Value:"));
      let n3 = parseInt(prompt("Enter Final Value:"));
      do {
        console.log(i3);
        i3+=1;
      } while(i3<=n3);
      break;
      default:
      console.log("Select the appropriate option only");
  }
}
Switch();
