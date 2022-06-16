import storage from '@react-native-firebase/storage';

export default file => onSuccess => onError => {
  console.log('file  demo :>>', file);
  console.log('file  creation :>>', file.creationDate);
  console.log('file  path :>>', file.path);
  const path = 'contact-pictures/user/777/' + file.modificationDate;
  //const path = 'contact-pictures/user/777/' + file.creationDate || file.path;
  const ref = storage().ref(path);

  const task = ref.putFile(file.path);

  task
    .then(async () => {
      const url = await ref.getDownloadURL();
      onSuccess(url);
    })
    .catch(error => {
      onError(error);
    });
};
