export default function getListStudentsIds(arrayofObjects) {
  if (!Array.isArray(arrayofObjects)) {
    return [];
  }
  const ids = arrayofObjects.map(({ id }) => id);
  return ids;
}
