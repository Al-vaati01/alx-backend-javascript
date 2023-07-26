import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const photo = await uploadPhoto();
  const user = await createUser();
  Promise.all([photo, user]).then(() => {
    console.log(photo.body, user.firstName, user.lastName);
  });
}
