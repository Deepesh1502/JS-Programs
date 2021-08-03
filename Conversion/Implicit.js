  let result;  
//Implicit Conversion to Strings
  result='6'+2; 
    console.log(result); //62
  result='6'+true; 
    console.log(result); //6true
  result='6'+undefined; 
    console.log(result); //6undefined
  result='6'+null; 
    console.log(result); //6null
  
//Implicit Conversion to Numbers
  result='6'-2;
    console.log(result); //4
  result='6'/'2';
    console.log(result); //3
    
//Non-numeric String Results to NaN
  result = 'Hello'-'World';
    console.log(result); //NaN
  result='6'-'Hello';
    console.log(result); //NaN
  result='6'*'Hello';
    console.log(result); //NaN
    
//Implicit Boolean Conversion to Number
//If Boolean is used, true is 1, false is 0
  result='6'-false;
    console.log(result); //6
  result=6-true;
    console.log(result); //5
  result=6-false;
    console.log(result); //6
    
//null Conversion to Number
  result=6+null;
    console.log(result); //6
  result=6-null;
    console.log(result); //6

//Undefined used with null, Boolean and Number
  result=6+undefined;
    console.log(result); //NaN
  result=6-undefined;
    console.log(result); //NaN
  result=true+undefined;
    console.log(result); //NaN
  result=null+undefined;
    console.log(result); //NaN
