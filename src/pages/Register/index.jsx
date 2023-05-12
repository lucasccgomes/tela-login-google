import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseconfig";
import { useState } from 'react';

export function Register ()  {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function hanleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password)
  }

  if (loading) {
    return <p>Carregando</p>
  }

  return (
    <div className="container">
      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite aqui seu E-Mail" />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite a Senha" />
        </div>
        <a href="#">Esqueceu a senha ?</a>
        <button className="button" onClick={hanleSignOut}>
          Cadastrar
        </button>
        <footer className="footer">
          <p>Você ja tem uma conta ?</p>
          <a href="#">Acesse sua conta aqui</a>
        </footer>
      </form>
    </div>
  );
}
