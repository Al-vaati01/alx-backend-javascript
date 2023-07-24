export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  let str;
  for (const a of array) {
    str = appendString + a;
    arr.push(str);
  }
  return arr;
}
