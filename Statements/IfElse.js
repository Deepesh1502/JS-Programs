{
  let a,b,c;
  console.log('Enter any three nos.: \n');
  scanf("%d%d%d", &a, &b, &c);
  if(a>b)
    if(a>c)
      console.log('a' + 'is greatest no.');
    else
      console.log('c' + 'is greatest no.');
  else
    if(b>c)
      console.log('b' + 'is greatest no.');
    else
      console.log('c' + 'is greatest no.');
}
