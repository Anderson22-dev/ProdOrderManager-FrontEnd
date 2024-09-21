import { FaRegCircleUser } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export function SideBar() {
  const { logout } = useContext(AuthContext);
  return (
    <div className="w-[16.25rem] h-screen sticky top-0 bg-[#EDF0F7] border-r-2 border-r-black flex flex-col justify-between">
      <div className="flex flex-col gap-1">
        <div className="bg-[#E2E7F0] px-6 py-3 w-full text-base font-semibold">
          Empresa
        </div>
        <div className="px-4">
          <Link to={"/vieworders"}>
            <button className="w-full text-[#717D96] text-sm font-medium hover:bg-[#2D3648] hover:text-white text-start">
              Visualizar Pedido
            </button>
          </Link>

          <Link to={"/createorder"}>
            <button className="w-full text-[#717D96] text-sm font-medium hover:bg-[#2D3648] hover:text-white text-start">
              Criar Pedido
            </button>
          </Link>
        </div>
      </div>

      <div className="border-t-black border-t-2 py-2">
        <div className="flex px-6 py-3 gap-2 items-center ">
          <FaRegCircleUser />
          <p className="text-sm font-medium">
            {localStorage.getItem("userName")}
          </p>
        </div>

        <button
          className="text-sm font-medium flex px-6 py-3 gap-2 items-center "
          onClick={logout}
        >
          <BiLogOut />
          Sair
        </button>
      </div>
    </div>
  );
}
