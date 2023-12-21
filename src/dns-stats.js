const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = new Map();
  // let parts
  // for (let i = 0; i < domains.length; i++){
  //   parts = domains[i].split('.').reverse();
  // }
  domains.forEach(domain => {
    let parts = domain.split('.').reverse();
    let domenPart='';
    for(let part of parts){
      domenPart+='.' + part
      if(result.has(domenPart)){
        result.set(domenPart, result.get(domenPart) + 1);
      } else{
        result.set(domenPart, 1)
      }
    }
  })

    let obj = Object.fromEntries(result);
    return obj
}

module.exports = {
  getDNSStats
};
