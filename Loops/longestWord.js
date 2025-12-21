function findLongestWordLength(str) {
  const words = str.split(" ");

  let longest = 0;

  for (const word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  return longest;
}

const a = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(a);

const b = findLongestWordLength(
  "I am thankful to God because he has given me the most loving perosn"
);
console.log(b);
