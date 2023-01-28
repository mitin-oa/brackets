module.exports = function check(str, bracketsConfig) {
  // your solution
  let config = bracketsConfig.join('').replace(/,/g, '');
  let sequence = [];

  for (let bracket of str) {
      let index = config.indexOf(bracket)
      if (index % 2 === 0) {
        sequence.push(index);
        if (bracket === config[index+1]) {
          sequence.pop();
        }
      }
      else {
        if (sequence.pop() !== index-1) {
          return false;
        };
      } 

    return sequence.length === 0;
  }
}
