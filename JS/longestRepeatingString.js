function longestRepeatingString(str) {
  let currStr = "",
    maxStr = "";

  for (let letter of str) {
    if (currStr?.[currStr.length - 1] === letter) {
      currStr += letter;
    } else {
      currStr = letter;
    }
    maxStr = currStr.length > maxStr.length ? currStr : maxStr
  }
  return maxStr
}

const str = "ttyrrreeeeeetteepaaaaaaaa";
console.log(longestRepeatingString(str))
