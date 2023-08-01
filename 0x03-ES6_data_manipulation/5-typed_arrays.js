export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const arrayview = new Uint8Array(arrayBuffer);
  try {
    arrayview[position] = value;
  } catch (error) {
    throw new Error('Position outside range');
  }
  const DataView = {
    byteLength: arrayview.byteLength,
    byteOffset: arrayview.byteOffset,
    buffer: arrayBuffer,
  };
  return DataView;
}
