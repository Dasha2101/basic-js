const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let e = 1;
  let arr = '';
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i+1]){
      e += 1
    }else {
      arr += e+str[i];
      e = 1;
    }
  }
  return arr.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
