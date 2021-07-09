function IfElse() {
  let a = prompt("Enter A:");
  let b = prompt("Enter B:");
  let c = prompt("Enter C:");
  if(a>b)
    if(a>c)
      console.log(a+ ' is greatest no.');
    else
      console.log(c+ ' is greatest no.');
  else
    if(b>c)
      console.log(b+ ' is greatest no.');
    else
      console.log(c+ ' is greatest no.');
}
IfElse();
