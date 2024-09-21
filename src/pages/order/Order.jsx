import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiPrinter, FiEdit, FiCheck } from "react-icons/fi";
import { SideBar } from "../../components/SideBar/SideBar";
import { OrderPDF } from "../../pdfs/OrderPDF/OrderPDF";
import { api } from "../../services/api";

export function Order() {
  const [order, setOrder] = useState([
    {
      id: "0001-24",
      costumer: "dsd",
      product: "fdd",
      quantity: 2,
      openingDate: null,
      lastReviewDate: null,
      deliveryDate: null,
      status: "ffdd",
    },
  ]);
  const [orderDescription, setOrderDescription] = useState([
    {
      item: "Carretilha",
      unid: "pç",
      qtd: "1",
    },
  ]);

  const id = useParams();

  async function getOrder() {
    const orderFromApi = await api.get(`/getOrder/${id}`);
    setOrder(orderFromApi);
  }

  async function getOrderDescription() {
    const orderDescriptionFromApi = await api.get(`/getOrder/${id}`);
    setOrderDescription(orderDescriptionFromApi);
  }

  async function putReviewData(data) {
    await api.post(`/getOrder`, { data });
  }

  useEffect(() => {
    getOrder();
    getOrderDescription();
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full flex flex-col px-6 py-12 gap-5">
        <h1 className="text-5xl">Pedido {order[0].id}</h1>
        <table className="w-full">
          <thead className="bg-[#2D3648] text-white px-4 py-2 h-10 border-2 border-[#CBD2E0] rounded-full">
            <tr>
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
            <td>{order[0].id}</td>
            <td>{order[0].costumer}</td>
            <td>{order[0].product}</td>
            <td>{order[0].quantity}</td>
            <td>{order[0].openingDate}</td>
            <td>{order[0].lastReviewDate}</td>
            <td>{order[0].deliveryDate}</td>
            <td>{order[0].status}</td>
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
          <button
            className="bg-[#3444F7] text-white flex items-center gap-2"
            onClick={() => OrderPDF(order, orderDescription)}
          >
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
