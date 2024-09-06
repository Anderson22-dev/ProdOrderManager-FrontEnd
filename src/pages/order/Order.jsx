// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { configApi } from "../../services/api";
import { FiPrinter, FiEdit, FiCheck } from "react-icons/fi";
import { SideBar } from "../../components/SideBar/SideBar";

export function Order() {
  //   const [order, setOrder] = useState([]);
  // const id = useParams();

  //   async function getOrder() {
  //     const orderFromApi = await configApi.get(`/getOrder/${id}`);
  //     setOrder(orderFromApi);
  //   }

  //   useEffect(() => {
  //     getOrder();
  //   });

  const order = [
    {
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

  const orderDescription = [
    {
      item: "Carretilha",
      unid: "pç",
      qtd: "1",
    },
  ];

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full flex flex-col px-6 py-12 gap-5">
        <h1 className="text-5xl">Pedido</h1>
        <table className="w-full">
          <thead className="bg-[#2D3648] text-white px-4 py-2 h-10 border-2 border-[#CBD2E0] rounded-full">
            <tr>
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
            {order.map((order, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
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
        <table className="w-full">
          <thead className="bg-[#2D3648] text-white px-4 py-2 h-10 border-2 border-[#CBD2E0] rounded-full">
            <tr>
              <th>Item</th>
              <th>Unid</th>
              <th>Qtd</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orderDescription.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.item}</td>
                  <td>{item.unid}</td>
                  <td>{item.qtd}</td>
                  <td> </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex w-full justify-end gap-12">
          <button className="bg-[#3444F7] text-white flex items-center gap-2">
            <FiPrinter />
            IMPRIMIR
          </button>
          <button className="bg-[#3444F7] text-white flex items-center gap-2">
            <FiEdit />
            EDITAR
          </button>
          <button className="bg-[#3444F7] text-white flex items-center gap-2">
            <FiCheck />
            REVISAR
          </button>
        </div>
      </div>
    </div>
  );
}
