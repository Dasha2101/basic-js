const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
//   let result = new Map();
//   email.forEach(em => {
//     let parts = em.split('.').reverse();
//     let emailPart='';
//     for(let part of parts){
//       emailPart+='.' + part
//       if(result.has(emailPart)){
//         result.set(emailPart)
//       }
//     }
//   })
//     let obj = Object.fromEntries(result);
//     return obj
// }

}
module.exports = {
  getEmailDomain
};
