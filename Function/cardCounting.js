let count = 0;
function cc(card) {
  if ([2, 3, 4, 5, 6].includes(card)) {
    count += 1;
  } else if ([10, "J", "Q", "K", "A"].includes(card)) {
    count -= 1;
  }
  let decision = count > 0 ? "Bet" : "Hold";
  return count + " " + decision;
}

cc(6);
cc(9);
cc("A");
cc(7);
cc(10);
cc("k");
