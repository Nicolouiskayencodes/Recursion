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
  if (num===0){
    return fibArray;
  }
  function fib(n) {
    if (n===1){
      return 0;
    } else if (n === 2) {
      return 1;
    } else {
      return (fib(n-1) + fib(n-2))
    };
  }
  fibArray.push(fib(num));
  return fibsRec(num-1).concat(fibArray);
}

function mergeSort(array) {
  if (array.length <= 1) {
    console.log(array)
    return array;
  } else {
    let left = array.slice(0,Math.round(array.length/2));
    let right = array.slice(Math.round(array.length/2), (array.length));
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);
    function merge(leftSide, rightSide){
      let newArray = [];
      let i = 0;
      let j = 0;
      let k = 0;
      while (i<leftSide.length && j<rightSide.length){
        if (leftSide[i]<rightSide[j]){
          newArray[k++] = leftSide[i++]
        } else if (leftSide[i]>=rightSide[j]){
          newArray[k++] = rightSide[j++]
        }
      }
      for (; i<leftSide.length; i++) {
        newArray[k++] = leftSide[i]
      }
      for (; j<rightSide.length; j++) {
        newArray[k++] = rightSide[j]
      }
      console.log(newArray)
      return newArray;
    }
    return merge(sortedLeft, sortedRight);
  }
  
}