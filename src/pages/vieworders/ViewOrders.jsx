import { MdOutlineInfo } from "react-icons/md";
import { SideBar } from "../../components/SideBar/SideBar";

export default function ViewOrders() {
  const tableData = [
    {
      ordem: 1,
      codigo: "0001-24",
      cliente: "ELETRICA & HIDRAULICA LTDA",
      produto: "Fonte 400W Mortal Duplo Carpado",
      qtd: 1,
      dataAb: "25/08/2024",
      dataUr: "25/08/2024",
      dataE: "25/08/2024",
      status: "Em Produção",
    },
    {
      ordem: 1,
      codigo: "0001-24",
      cliente: "ELETRICA & HIDRAULICA LTDA",
      produto: "Fonte 400W Mortal Duplo Carpado",
      qtd: 1,
      dataAb: "25/08/2024",
      dataUr: "25/08/2024",
      dataE: "25/08/2024",
      status: "Em Produção",
    },
  ];

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full flex flex-col px-6 py-12 gap-[6.25rem]">
        <h1 className="text-5xl">Visualizar Pedidos</h1>
        <table className="w-full">
          <thead className="bg-[#2D3648] text-white px-4 py-2 h-10 border-2 border-[#CBD2E0] rounded-full">
            <tr>
              <th className="border-l-0">Info</th>
              <th>Ordem</th>
              <th>Código</th>
              <th>Cliente</th>
              <th>Produto</th>
              <th>Qtd</th>
              <th>Data.Ab</th>
              <th>Data.UR</th>
              <th>Data.E</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((order) => {
              return (
                <tr key={order.ordem}>
                  <td className="m-auto">
                    <MdOutlineInfo />
                  </td>
                  <td>{order.ordem}</td>
                  <td>{order.codigo}</td>
                  <td>{order.cliente}</td>
                  <td>{order.produto}</td>
                  <td>{order.qtd}</td>
                  <td>{order.dataAb}</td>
                  <td>{order.dataUr}</td>
                  <td>{order.dataE}</td>
                  <td>{order.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
