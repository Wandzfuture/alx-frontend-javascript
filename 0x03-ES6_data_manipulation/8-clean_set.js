function cleanSet(set, startString) {
  // Convert the set to an array and filter values
  return [...set]
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
}

export default cleanSet;
