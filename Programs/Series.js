/*The Program will create a series which will have
The value of third number will be addition of first two numbers
*/
function Series() {
  let num=parseInt(prompt("Enter a number: "));
  i=0;
  a=0;
  b=1;
  while(i<=num) {

//The If is used to print first two numbers
    if(i<=1) {
      n=i;
    }

//Else code block will add the numbers and print the value
    else {
      n=a+b;
      a=b;
      b=n;
    }
    console.log(n);
    i=i+1;
  }
}
Series();
