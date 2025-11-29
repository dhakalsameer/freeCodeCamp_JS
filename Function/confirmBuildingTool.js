function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")); // true
console.log(confirmEnding("OpenAI ChatGPT", "AI")); // false
