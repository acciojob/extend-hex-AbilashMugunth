const extendHex = (shortHex) => {
  let ans = "#";
  let curr = 0;
  if (shortHex.startsWith("#")) {
    curr = 1;
  }

  for (let i = curr; curr < shortHex.length; curr++) {
    ans += shortHex.charAt(curr).toLowerCase();
    ans += shortHex.charAt(curr).toLowerCase();
  }

  return ans;
};

// Do not change the codebelow.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
