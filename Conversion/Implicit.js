function Implicit() {
  let result;
  
//Implicit Conversion to Strings
  result = '6'+2; 
    console.log(result);
  result = '6'+true; 
    console.log(result);
  result = '6'+undefined; 
    console.log(result);
  result = '6'+null; 
    console.log(result);
  
//Implicit Conversion to Numbers
  result='6'-2;
    console.log(result);
  result='6'/'2';
    console.log(result);
    
//Non-numeric String Results to NaN
  result='Hello'-'World';
    console.log(result);
  result='6'-'Hello';
    console.log(result);
  result='6'*'Hello';
    console.log(result);
    
//Implicit Boolean Conversion to Number
//If Boolean is used, true is 1, false is 0
  result='6'-false;
    console.log(result);
  result=6-true;
    console.log(result);
  result=6-false;
    console.log(result);
    
//null Conversion to Number
  result=6+null;
    console.log(result);
  result=6-null;
    console.log(result);

//Undefined used with null, Boolean and Number
  result=6+undefined;
    console.log(result);
  result=6-undefined;
    console.log(result);
  result=true+undefined;
    console.log(result);
  result=null+undefined;
    console.log(result);
}
Implicit();
