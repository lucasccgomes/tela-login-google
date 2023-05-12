import { Link } from "react-router-dom";

export const LoginEmail = () => {

    return (
        <div>
            <div className="container">
                <form>
                    <div className="inputContainer">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Digite aqui seu E-Mail" />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Digite a Senha" />
                    </div>
                    <a href="#">Esqueceu a senha ?</a>
                    <button className="button">
                        Entrar
                    </button>
                    <footer className="footer">
                        <p>Você nâo tem uma conta ?</p>
                        <Link to="/register">Crie sua conta aqui</Link>
                    </footer>
                </form>
            </div>
        </div>
    );
}
