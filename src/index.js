module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = bracketsConfig.join('').replace(/,/g, '');
  let sequence = [];
  for (let bracket of str) {
      let bracketsIndex = brackets.indexOf(bracket)
      if (bracketsIndex === -1) {
        continue
      }
      if (bracketsIndex % 2 === 0) {
            sequence.push(bracketsIndex + 1)
      } else {
          if (sequence.pop() !== bracketsConfig) {
            return false;
          };
        } 
    }
    return sequence.length === 0
}
