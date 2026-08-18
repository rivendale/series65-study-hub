/**
 * Firebase wiring. The config below is PUBLIC BY DESIGN — it identifies the
 * project the way a hostname does; security lives entirely in Firestore rules
 * (per-user isolation, see firestore.rules) and in Google sign-in. Nothing
 * here is a secret, which is why it can sit in a public repository.
 *
 * Everything is loaded lazily via dynamic import so the Firebase SDK stays out
 * of the initial bundle: a student who never signs in never downloads it.
 */
export const firebaseConfig = {
  apiKey: 'AIzaSyAFo2VAyNtdkMmtC9S1GYfURweS03qOJXw',
  authDomain: 'rygiel-family.firebaseapp.com',
  projectId: 'rygiel-family',
  storageBucket: 'rygiel-family.firebasestorage.app',
  messagingSenderId: '1079332755733',
  appId: '1:1079332755733:web:da6f3d04cb4969646cf11c',
};

let appPromise: Promise<import('firebase/app').FirebaseApp> | null = null;

export function getFirebaseApp() {
  if (!appPromise) {
    appPromise = import('firebase/app').then(({ initializeApp, getApps, getApp }) =>
      getApps().length ? getApp() : initializeApp(firebaseConfig)
    );
  }
  return appPromise;
}
