import { SideBar } from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";

export function CreateOrder() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full flex flex-col px-6 py-12 gap-5">
        <h1 className="text-5xl">Criar Pedido</h1>
        <label htmlFor="">Cliente:</label>
        <input type="text" />
        <label htmlFor="">Produto:</label>
        <input type="text" />
        <label htmlFor="">Quantidade:</label>
        <input type="number" />
        <label htmlFor="">Data de Entrega:</label>
        <input type="date" />
        <div className="w-full flex justify-end">
          <Link to={"/"}>
            <button className="bg-[#3444F7] text-white">AVANÇAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
