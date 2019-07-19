//write method to replease all spaces in a string with '%20';

function URLify(string) {
  return string.trim().replace(/\s/g, '%20');
}