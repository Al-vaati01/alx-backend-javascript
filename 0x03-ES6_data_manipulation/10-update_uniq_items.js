export default function updateUniqueItems(argMap = new Map()) {
  try {
    for (const val of argMap) {
      if (val[1] === 1) {
        argMap.set(val[0], 100);
      }
    }
    return argMap;
  } catch (error) {
    throw new Error('Cannot process');
  }
}
