function cleanSet(set, startString) {
  let result = '';
  for (let value of set) {
    if (value.startsWith(startString)) {
      result += value.substring(startString.length) + '-';
    }
  }
  return result.trim().replace(/-$/, ''); // remove trailing dash
}
