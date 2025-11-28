function booWho(arg) {
  return typeof arg === "boolean";
}

console.log(booWho(true));
console.log(booWho(false));
booWho([1, 2, 3]);
booWho([].slice);
booWho({ a: 1 });
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");
