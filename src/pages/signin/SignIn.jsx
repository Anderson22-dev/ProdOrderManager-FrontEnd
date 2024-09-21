import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useContext, useRef } from "react";
import { AuthContext } from "../../contexts/auth";
export function SignIn() {
  const { login } = useContext(AuthContext);
  const inputLogin = useRef();
  const inputPassword = useRef();

  async function loginUser(event) {
    event.preventDefault();
    try {
      const userData = await api.post("/auth/login", {
        login: inputLogin.current.value,
        password: inputPassword.current.value,
      });
      login(userData.data.token, userData.data.login);
    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center bg-white gap-8 px-10 py-10 rounded-xl w-[31.25rem]">
        <h1 className="text-[2rem] font-bold">Login</h1>
        <form className="flex flex-col gap-2 w-full" onSubmit={loginUser}>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Nome:</label>
            <input type="text" ref={inputLogin} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Senha:</label>
            <input type="password" ref={inputPassword} />
          </div>
          <p>
            Não tem uma conta?{" "}
            <Link to={"/cadastro"} className="underline text-blue-600">
              Crie uma!
            </Link>
          </p>
          <button className="bg-[#3444F7] text-white" type="submit">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}
