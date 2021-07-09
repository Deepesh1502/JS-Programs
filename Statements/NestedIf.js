/*The NestedIf statement is in which
If...Else statement is used in either
If block or Else block
*/
function NestedIf() {
  let num=parseInt(prompt("Enter a number:"));
  if (num>=0)
    if (num==0)
      console.log("Zero");
    else
      console.log("Positive Number");
  else
    console.log("Negative Number");
}
NestedIf();
