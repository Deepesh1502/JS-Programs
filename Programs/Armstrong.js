/*Armstrong by using While Loop in JavaScript
Instead of For Loop
*/
function Armstrong() {
  let n=parseInt(prompt("Enter a number:"));
  sum=0;
  temp=n;
  while (temp>0) {
    r=temp%10;
    sum=sum+r*r*r;
    temp=temp/10;

/*This will convert value of temp
From float to int
*/
    temp=parseInt(temp);
  }

//If Statement is used for decision making
  if (n==sum)
    console.log(n+ " is an Armstrong");
  else
    console.log(n+ " is not an Armstrong");
}
Armstrong();
