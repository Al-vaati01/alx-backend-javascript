export default function (argSet, argArray) {
  const validation = argArray.every((entry) => argSet.has(entry));
  return validation;
}
