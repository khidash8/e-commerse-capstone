import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWqvTQMvPDPv6vsTe7tao73AMga33pnu8",
  authDomain: "ape-shopping-db.firebaseapp.com",
  projectId: "ape-shopping-db",
  storageBucket: "ape-shopping-db.appspot.com",
  messagingSenderId: "936188163049",
  appId: "1:936188163049:web:a142253158597093225178",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ? Google Authentication
// get reference to google auth provider
export const auth = getAuth();

// * google provider
export const provider = new GoogleAuthProvider();
provider.getCustomParameters({ prompt: "select_account" });

// * sign in with google popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// * sign in with google redirect
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// ? firebase config
export const db = getFirestore();

export const getDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return;

  const usreRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(usreRef);

  // check if the user snapshot exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    try {
      await setDoc(usreRef, {
        displayName,
        email,
        createdAt: new Date(),
        ...additionalInformation,
      });
    } catch (error) {
      console.log(`coudn't create user`, error.message);
    }
  }

  return usreRef;
};

// * sign in with email and password
export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
