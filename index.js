function isPalindrome(word) {
  // Write your algorithm here
  const splitWord = word.split('');
  const reversedSplitWord = splitWord.reverse();
  const wordReversed = reversedSplitWord.join('');
  return wordReversed === word ? true : false;
}

/* 
  take in a word. 
  use a method to reverse the input 
  check if the word reversed is equal to its original form
  use ternary 
*/

/*
  take in word, split it into an array, reverse the array
  take the reversed array and join() to create the word inputed in reverse
  compare the inputed word to the reversed version and return true or false based on if it matches
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Lianne"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eye"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

}

module.exports = isPalindrome;
