// const res = require('express/lib/response.js');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    arr.push(Number(n.replace(n[i], '')))
  }
  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
