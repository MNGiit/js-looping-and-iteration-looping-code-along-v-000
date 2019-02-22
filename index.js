// Code your solutions in this file
function printBadges(arr) {
  for (let number = 1; number <= arr.length; number++) {
    console.log()
  }
}


printBadges()
invokes console.log() once for each element in the passed-in array ‣
ReferenceError: printBadges is not defined
    at Context.it (test/indexTest.js:16:4)printBadges(['Lisa', 'Kaitlin', 'Jan']);
expect(spy.callCount).to.eq(3);