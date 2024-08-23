import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col items-center bg-white gap-8 px-10 py-10 rounded-xl w-[37rem]">
        <h1 className="text-[2rem] font-bold">Login</h1>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="">Nome:</label>
          <input type="text" />
          <label htmlFor="">Senha:</label>
          <input type="text" />
          <p>
            Não tem uma conta? <Link>Crie uma!</Link>
          </p>
        </div>
        <button className="bg-blue-400">Entrar</button>
      </div>
    </div>
  );
}
