import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import { Navigate } from "react-router-dom";





export const Login = () => {

  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  async function loginGoogle() {
    await signInGoogle()

  }
  if (!signed) {
    return (
      <div>
        <button onClick={() => signInGoogle()}>Logar com Google</button>
      </div>
    );
  } else {
    return <Navigate to="/home" />
  }

}
