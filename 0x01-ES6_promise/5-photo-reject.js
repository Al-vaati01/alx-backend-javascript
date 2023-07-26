export default async function uploadPhoto(fileName) {
  if (fileName) {
    throw new Error(`${fileName} cannot be processed`);
  }
}
