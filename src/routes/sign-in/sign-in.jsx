import SignUpForm from "../../components/sign-up-form/sign-up-form";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <SignUpForm />
    </div>
  );
}
