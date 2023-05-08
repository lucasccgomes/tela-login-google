import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";

export const Home = () => {
  const { user, signOut } = useContext(AuthGoogleContext)
  let userLogado = JSON.parse(user)

  return (
    <div>
      <h1>Bem Vindo {userLogado.displayName}</h1>
      <img src={userLogado.photoURL} alt="Foto do Perfil" />
      <p>Email: {userLogado.email}</p>
      <button onClick={() => signOut()} >Sair</button>
    </div>
  );
}
