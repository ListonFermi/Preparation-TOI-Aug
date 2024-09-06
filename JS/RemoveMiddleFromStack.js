function removeMiddle(stack) {
  const m = Math.floor(stack.length / 2);
  const altStack = [];

  let i = stack.length - 1;
  while (i >= m) {
    if (i === m) {
      stack.pop();
      break;
    }
    altStack.push(stack.pop());
    i--;
  }

  while(altStack.length){
    stack.push(altStack.pop())
  }
  return stack
}

const s = [1, 2, 3, 4, 5];
console.log(removeMiddle(s));
