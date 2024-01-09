// import { useEffect } from "react";
import {
  // auth,
  getDocumentFromAuth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
} from "../../utils/firebase.utils";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // popup
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = getDocumentFromAuth(user);
  };

  // redirect
  // useEffect(() => {
  //   const loginUserWithRedirect = async () => {
  //     const res = await getRedirectResult(auth);

  //     const userDocRef = getDocumentFromAuth(res.user);
  //   };

  //   loginUserWithRedirect();
  // }, []);

  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGooglePopupUser}>sign in with google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
