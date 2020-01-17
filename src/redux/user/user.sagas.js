import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  auth, googleProvider, createUserProfileDocument, getCurrentUser,
} from '../../firebase/firebase.utils';
import {
  signInSuccess, signInFailure,
  signOutSuccess, signOutFailure, signUpFailure,
} from './user.actions';
import { emptyCart } from '../cart/cart.actions';

function* getUserSnapshotAndSignIn(user, displayName) {
  try {
    const userRef = yield call(createUserProfileDocument, user, { displayName });
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshotAndSignIn(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshotAndSignIn(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    yield put(emptyCart());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield getUserSnapshotAndSignIn(user, displayName);
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserSnapshotAndSignIn(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// HELPERS
function* onGoogleSignInStart() {
  yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest('EMAIL_SIGN_IN_START', signInWithEmail);
}

function* onSignOutStart() {
  yield takeLatest('SIGN_OUT_START', signOut);
}

function* onSignUpStart() {
  yield takeLatest('SIGN_UP_START', signUp);
}

function* onCheckUserSession() {
  yield takeLatest('CHECK_USER_SESSION', isUserAuthenticated);
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignOutStart),
    call(onCheckUserSession),
  ]);
}
