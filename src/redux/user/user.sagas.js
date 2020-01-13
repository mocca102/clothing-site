import { takeLatest, put, call, all } from 'redux-saga/effects';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure } from './user.actions';

function* getUserSnapshot(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}


function* googleSignInStart() {
  yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle);
}

function* emailSignInStart() {
  yield takeLatest('EMAIL_SIGN_IN_START', signInWithEmail);
}

export default function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
  ]);
}
