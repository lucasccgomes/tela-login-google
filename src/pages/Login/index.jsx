import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../services/firebaseconfig";

const provider = new GoogleAuthProvider();

export const Login = () => {
  const auth = getAuth(app);
  const signInGoogle = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)

      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

      });
  }

  return (
    <div>
      <button onClick={signInGoogle}>Logar com Google</button>
    </div>
  );
}
