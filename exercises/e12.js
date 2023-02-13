
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from "../data/data";

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  const depositsGreaterThan100 = [];
  for (const account of array) {
    for (const deposit of account.deposits || []) {
      if(deposit > 100) {
        depositsGreaterThan100.push(deposit)
      }
    }
  }
  return depositsGreaterThan100;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
