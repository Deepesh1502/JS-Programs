//Convert to Number Explicit
  let result;
//String to Number
  result = Number('213');
    console.log(result);
  result = Number('213e-1')  
    console.log(result);

//Boolean to Number
  result = Number(true);
    console.log(result);
  result = Number(false);
    console.log(result);

//Empty string and null
  result = Number(null);
    console.log(result);
  result = Number(' ');
    console.log(result);

//String is an Invalid Number
  result = Number('hello');
    console.log(result);
  result = Number(undefined);
    console.log(result);
  result = Number(NaN);
    console.log(result);
