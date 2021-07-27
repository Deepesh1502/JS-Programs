//Convert to Boolean Explicit
let result;
//null, undefined, 0, NaN to Boolean
result = Boolean('');
  console.log(result);
result = Boolean(0);
  console.log(result);
result = Boolean(undefined);
  console.log(result);
result = Boolean(null);
  console.log(result);
result = Boolean(NaN);
  console.log(result);
    
//string, defined to Boolean
result = Boolean(324);
  console.log(result);
result = Boolean('hello');
  console.log(result);
result = Boolean(' ');
  console.log(result); 
