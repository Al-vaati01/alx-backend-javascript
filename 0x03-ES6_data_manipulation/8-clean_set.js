export default function cleanSet(argSet = new Set(), startString) {
  const final = [];
  argSet.forEach(
    (val) => {
      if (!startString) {
        final.push(val);
      } else {
        final.push(val.split(startString));
      }
    },
  );
  return final;
}
