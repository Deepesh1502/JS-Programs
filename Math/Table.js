/*The ForLoop is used to create a table
In this program you must enter the final value
to stop the ForLoop
*/
function Table() {
  let i=parseInt(prompt("Enter value for table of:"));
  let j=parseInt(prompt("Enter Final Value:"));
  let n;
  for (n=i;n<=(i*10);n+=i) {
  console.log(n);
  }
}
Table();
