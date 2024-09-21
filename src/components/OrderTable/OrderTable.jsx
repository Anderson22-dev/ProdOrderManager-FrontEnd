import { useEffect, useState } from "react";
import { MdOutlineInfo } from "react-icons/md";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { TailSpin } from "react-loading-icons";

export const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function getOrders() {
    setLoading(true);
    try {
      const completeOrdersFromApi = await api.get(
        "/prodOrder/completedOrders",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setOrders(...orders, completeOrdersFromApi.data);
      console.log(orders);
    } catch (error) {
      setErrorMessage(error.message);
    }
    try {
      const openOrdersFromApi = await api.get("/prodOrder/openOrders", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setOrders(...orders, openOrdersFromApi.data);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    getOrders();
  }, []);

  if (loading) {
    return <TailSpin stroke="black" />;
  }

  return (
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
        {orders.map((order, index) => {
          return (
            <tr key={index}>
              <td className="text-2xl">
                <Link to={`/order/${order.id}`}>
                  <MdOutlineInfo />
                </Link>
              </td>
              <td>{index + 1}</td>
              <td>{order.id}</td>
              <td>{order.costumer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.openingDate}</td>
              <td>{order.lastReviewDate}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
