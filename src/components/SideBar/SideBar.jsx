import { FaRegCircleUser } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";

export function SideBar() {
  return (
    <div className="w-[16.25rem] h-screen bg-[#EDF0F7] border-r-2 border-r-black flex flex-col justify-between">
      <div className="flex flex-col gap-1">
        <div className="bg-[#E2E7F0] px-6 py-3 w-full text-base font-semibold">
          Empresa
        </div>
        <div className="px-4">
          <button className="w-full text-[#717D96] text-sm font-medium hover:bg-[#2D3648] hover:text-white text-start">
            Visualizar Pedido
          </button>
          <button className="w-full text-[#717D96] text-sm font-medium hover:bg-[#2D3648] hover:text-white text-start">
            Criar Pedido
          </button>
        </div>
      </div>

      <div className="border-t-black border-t-2 py-2">
        <div className="flex px-6 py-3 gap-2 items-center ">
          <FaRegCircleUser />
          <p className="text-sm font-medium">Nome do usuário</p>
        </div>
        <button className="text-sm font-medium flex px-6 py-3 gap-2 items-center ">
          <BiLogOut />
          Sair
        </button>
      </div>
    </div>
  );
}
