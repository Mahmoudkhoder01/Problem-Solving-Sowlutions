const isValidBracketSequence = (str) => {
  const map = new Map();
  map.set("{", "}");
  map.set("(", ")");
  map.set("[", "]");
  const x = [];

  for (let i = 0; i < str.length; i++) {
    if (map.has(str.charAt(i))) {
      x.push(str.charAt(i));
    } else {
      let pop = x.pop();
      if (map.get(pop) !== str.charAt(i)) {
        return false;
      }
    }
  }
  return x.length === 0;
};

console.log(isValidBracketSequence("()[]{}")); // Returns true
console.log(isValidBracketSequence("([{}])")); // Returns true
console.log(isValidBracketSequence("(")); // Returns false
console.log(isValidBracketSequence("[(])")); // Returns false
console.log(isValidBracketSequence("{[}]")); // Returns false
