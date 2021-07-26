/*The Logical Operator is used to get
Boolean value of expression/Condition
And to make decision also*/
function Logical() {
  let a=parseInt(prompt("Enter value for A:"));
  let b=parseInt(prompt("Enter value for B:"));
  let c=parseInt(prompt("Enter value for C:"));

//Logical AND
  {
    console.log("Using Logical AND");
    if(a<=0 && a>=0) {
      console.log("Value of A is 0");
    }
    else {
      console.log(a+" is not 0")
    }
  }

//Logical OR
  {
    console.log("Using Logical OR");
    if(b>0 || b<0) {
      console.log(b+" is not 0");
    }
    else {
      console.log("Value of B is 0");
    }
  }

//Logical NOT
  {
    console.log("Using Logical NOT");
    console.log("The Boolean value of "+c+ " is "+!c);
  }
}
Logical();
