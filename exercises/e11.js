// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from "../data/data";

export function getAllWithdrawals(array) {
  // Your code goes here...
  let sum = [];
  for (let i = 0; i < array.length; i++) {
    let withdrawals = array[i].withdrawals || [];
    let total = 0;
    for (let j = 0; j < withdrawals.length; j++) {
      total += withdrawals[j];
    }
    sum.push(total);
  }
  return sum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
