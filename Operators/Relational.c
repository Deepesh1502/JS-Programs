/*The Relational Operators are used in
If condition to make decision*/
function Comparison() {
  let a=parseInt(prompt("Enter value of A:"));
  let b=parseInt(prompt("Enter value of B:"));
  {
    if(a!=b) { //Not Equal to
      if(a>=0) { //Greater than Equal to
        console.log(a+" is positive");
      }
      if(a<0) { //Lesser than
        console.log(a+" is negative");
      }
      if(0<=b) { //Lesser or Equal to
        console.log(b+" is greater than 0");
      }
      if(10>b) { //Greater than
        console.log("10 is greater than "+b);
      }
    }
    if (a==b) { //Equal to
      console.log("Both values of A and B are equal")
    }
  }
}
Comparison();
