function areThereDuplicates() {
  // O(n) time and space
  var args = [].slice.call(arguments);
  var count = {}
  for (let i = 0; i < args.length; i++) {
      if (count[args[i]]) {
        return true;
      }
      count[args[i]] = 1;
  }
  return false;
}