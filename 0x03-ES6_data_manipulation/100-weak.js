export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  let counter = weakMap.get(endpoint) || 0;
  counter += 1;

  if (counter < 5) {
    weakMap.set(endpoint, counter);
  } else {
    throw new Error('Endpoint load is high');
  }
}
