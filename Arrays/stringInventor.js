function reverseString(string) {
  let str = string.split("");
  let rev = str.reverse();
  let ret = rev.join("");

  return ret;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Hello, Samita and Sameer"));
