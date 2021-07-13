/*The ForLoop is used to create a table
In this program you must enter the value of final Multiplicand
to stop the ForLoop
*/
function Table() {
  let i=parseInt(prompt("Enter value for table of:"));
  let j=parseInt(prompt("Enter value of Final Multiplicand:"));
  let n;
  let a=1;
  for (n=i;n<=(i*j);n+=i) {
  console.log(i+" * "+a+" = "+n);
  //The print statement has string to make output more clear
  a++;
  }
}
Table();