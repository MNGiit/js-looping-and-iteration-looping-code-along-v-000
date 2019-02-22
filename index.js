// Code your solutions in this file
function printBadges(arr) {
  for (let number = 0; number < arr.length; number++) {
    console.log(`Welcome ${arr[number]}! You are employee #${number+1}.`);
  }
  return arr;
}

function tailsNeverFails() {
  
}






invokes Math.random() to simulate coin flips ‣
ReferenceError: tailsNeverFails is not defined
    at Context.it (test/indexTest.js:51:4)spy.returns(0.2);
tailsNeverFails();
expect(spy.calledOnce).to.be.true;