export default async function getFullResponseFromAPI(success) {
  if (success === true) {
    return (
      {
        status: 200,
        body: 'Success',
      }
    );
  }
  throw new Error('The fake API is not working currently');
}
