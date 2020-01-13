import { takeLatest, put, call, all } from 'redux-saga/effects';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure } from './user.actions';

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}


function* googleSignInStart() {
  yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle);
}

export default function* userSagas() {
  yield all([
    call(googleSignInStart),
  ]);
}
