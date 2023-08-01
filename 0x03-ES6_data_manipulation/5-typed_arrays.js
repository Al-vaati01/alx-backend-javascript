export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const arrayview = new DataView(arrayBuffer);
  try {
    arrayview.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }
  return arrayview;
}
