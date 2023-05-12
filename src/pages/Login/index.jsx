import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import { Link, Navigate } from "react-router-dom";
import { LoginEmail } from "../Login-email";


export const Login = () => {

  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  async function loginGoogle() {
    await signInGoogle()

  }
  if (!signed) {
    return (
      <>
        <LoginEmail />
        <div>
          <button onClick={() => signInGoogle()}>Logar com Google</button>
        </div>
      </>
    );
  } else {
    return <Navigate to="/home" />
  }

}
