/*Palindrome by using While Loop in JavaScript
Instead of For Loop
*/
function Pallindrome() {
  let n = parseInt(prompt("Enter number:"));
  let sum=0;
  let temp=n;
  while (temp>0) {
    r=temp%10;
    sum=(sum*10)+r;
    temp=temp/10;

/*This will convert value of temp
*/From float to int
    temp=parseInt(temp);

  }

//If statement is used for decision making
  if (n==sum)
    console.log(n+ " It is Pallindrome");
  else
    console.log(n+ " It is not Pallindrome");
}
Pallindrome();
