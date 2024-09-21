import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useRef, useState } from "react";

export function SignUp() {
  const [message, setMessage] = useState("");
  const inputName = useRef();
  const inputPassword = useRef();

  async function createUser() {
    try {
      await api.post("/auth", {
        login: inputName.current.value,
        password: inputPassword.current.value,
        role: "ADMIN",
      });
      setMessage("Cadastrado com sucesso");
      window.location.replace("/");
    } catch (error) {
      console.error("Erro ao criar usuário:", setMessage(error.response.data));
    }
  }
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen">
      <div className="flex flex-col items-center bg-white gap-8 px-10 py-10 rounded-xl w-[31.25rem]">
        <h1 className="text-[2rem] font-bold">Cadastro</h1>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Nome:</label>
            <input type="text" ref={inputName} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Senha:</label>
            <input type="password" ref={inputPassword} />
          </div>
          <p>
            Já tem uma conta?
            <Link to={"/"} className="underline text-blue-600">
              Faça o login!
            </Link>
          </p>
        </div>

        <button className="bg-[#3444F7] text-white" onClick={createUser}>
          CADASTRAR
        </button>
      </div>
      {message ? (
        <div className="bg-white gap-8 px-10 py-10">
          <h1 className="flex items-center">{message}</h1>
        </div>
      ) : null}
    </div>
  );
}
