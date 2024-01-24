const bcryptMod = require("bcrypt");

const cardDetails = {
  name: "shaik",
  ccnumber: 1223444455,
  cvv: 233,
};

let ccnumberStr = cardDetails.ccnumber.toString();
// console.log(typeof ccnumberStr);
let cvvStr = cardDetails.cvv.toString();

let ccnumHash = bcryptMod.hashSync(ccnumberStr, 12);
let cvvHash = bcryptMod.hashSync(cvvStr, 12);

console.log(ccnumHash, cvvHash);

const updatedDetails = { ...cardDetails, ccnumber: ccnumHash, cvv: ccnumHash };
console.log(updatedDetails);
