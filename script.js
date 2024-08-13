function fibs(num) {
  let x=0;
  let fibArray = [];
  for (let i=0; i<num; i++) {
    if (i===0) {
      fibArray.push(x);
    } else if (i===1){
      x+=1;
      fibArray.push(x);
    } else{
      x+=fibArray[i-2];
      fibArray.push(x);
    }
  }
  return fibArray;
}

function fibsRec(num) {
  let fibArray = [];
  if (num<0){
    return fibArray;
  }
  function fib(n) {
    if (n <2) {
      return n;
    } else {
      return (fib(n-1) + fib(n-2))
    };
  }
  fibArray.push(fib(num));
  return fibsRec(num-1).concat(fibArray);
}
