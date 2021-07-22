//The Do While Loop works opposite of While Loop

function DoWhile() {
  let i = parseInt(prompt("Enter Initial Value:"));
  let n = parseInt(prompt("Enter Final Value:"));

//The value gets print and incremented
  do {
    console.log(i);
    i+=1;

//Condition is checked whether it is true or not
  } while (i<=n);

}
DoWhile();
