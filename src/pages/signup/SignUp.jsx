import { Link } from "react-router-dom";
// import { api } from "../../services/api";
import { useRef } from "react";

export function SignUp() {
  const inputName = useRef();
  const inputPassword = useRef();

  // async function createUser() {
  //   await api.post("/auth/register", {
  //     data: {
  //       login: inputName.current.value,
  //       password: inputPassword.current.value,
  //       role: "ADMIN",
  //     },
  //   });
  // }
  return (
    <div className="flex items-center justify-center h-screen">
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
            Já tem uma conta?{" "}
            <Link to={"/"} className="underline text-blue-600">
              Faça o login!
            </Link>
          </p>
        </div>

        <Link to={"/"}>
          <button className="bg-[#3444F7] text-white">CADASTRAR</button>
        </Link>
      </div>
    </div>
  );
}
