import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center bg-white gap-8 px-10 py-10 rounded-xl w-[31.25rem]">
        <h1 className="text-[2rem] font-bold">Login</h1>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Nome:</label>
            <input type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Senha:</label>
            <input type="password" />
          </div>
          <p>
            Não tem uma conta?{" "}
            <Link to={"/cadastro"} className="underline text-blue-600">
              Crie uma!
            </Link>
          </p>
        </div>

        <Link to={"/vieworders"}>
          <button className="bg-[#3444F7] text-white">ENTRAR</button>
        </Link>
      </div>
    </div>
  );
}
