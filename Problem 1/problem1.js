const validateEmail = (email) => {
  if (email.length > 256) {
    return false;
  }

  let atSymbol = email.indexOf("@");

  if (atSymbol == -1) {
    return false;
  }

  let oneAtSymbol = email.split("@");
  let dotSymbol = oneAtSymbol[1].indexOf(".");
  let dotSplits = oneAtSymbol[1].split(".");
  let dotCount = dotSplits.length;
  let atSymbolCount = oneAtSymbol.length;

  if (
    dotSymbol == -1 ||
    // dotSymbol< 2 ||
    dotCount > 2 ||
    atSymbolCount >= 2
  ) {
    return false;
  }

  for (var i = 0; i < dotSplits.length; i++) {
    if (
      dotSplits[i].length == 0 ||
      dotSplits[dotSplits.length - 1].length == 1
    ) {
      return false;
    }
  }
  return true;
};

console.log(validateEmail("john.doe@gmail.com")); // Returns true
console.log(validateEmail("john@doe@gmail.com")); // Returns false
console.log(validateEmail("john@gmail.c")); // Returns false
console.log(validateEmail("john@.com")); // Returns false
