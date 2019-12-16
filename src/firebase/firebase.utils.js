/* eslint-disable consistent-return */
import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCKKmWrEeesvl9BE8QS6AG7_R3StWsyIu0',
  authDomain: 'clothing-site.firebaseapp.com',
  databaseURL: 'https://clothing-site.firebaseio.com',
  projectId: 'clothing-site',
  storageBucket: 'clothing-site.appspot.com',
  messagingSenderId: '799282827271',
  appId: '1:799282827271:web:cc86f452be4c5ccb459aa2',
};

firebase.initializeApp(firebaseConfig);

// firebase Authentication
export const auth = firebase.auth();

// firestore
export const firestore = firebase.firestore();

// google Authentication provider
// to pass to signInWithPopUp
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // getting a QueryReference that represent the place in the data base
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // get QuerySnapshot of the current reference
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      // console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();

    return {
      title,
      items,
      id: docSnapshot.id,
      routeName: encodeURI(title.toLowerCase()),
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
