import { SideBar } from "../../components/SideBar/SideBar";
import { OrderTable } from "../../components/OrderTable/OrderTable";

export default function ViewOrders() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full flex flex-col px-6 py-12 gap-[6.25rem]">
        <h1 className="text-5xl">Visualizar Pedidos</h1>
        <OrderTable />
      </div>
    </div>
  );
}
