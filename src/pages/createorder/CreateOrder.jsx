import { useRef, useState } from "react";
import { SideBar } from "../../components/SideBar/SideBar";
import { api } from "../../services/api";

export function CreateOrder() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const inputClient = useRef();
  const inputProduct = useRef();
  const inputQuantity = useRef();
  const inputDeliveryDate = useRef();

  const results = ["Transformador X", "Transformador 440W", "Fonte Z"];

  const formatDate = (dateString) => {
    const date = new Date(dateString).toLocaleDateString("pt-br", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return date;
  };

  const productDescription = [
    {
      item: "Fio de cobre",
      unit: "PÇ",
      quantity: 1,
    },
    {
      item: "Fio de cobre",
      unit: "PÇ",
      quantity: 1,
    },
  ];

  async function createOrder() {
    const orderData = {
      customer: inputClient.current.value,
      product: inputProduct.current.value,
      quantity: parseInt(inputQuantity.current.value),
      deliveryDate: formatDate(inputDeliveryDate.current.value),
    };

    console.log("Order Data: ", orderData); // Imprime os dados para verificar

    try {
      await api.post("/prodOrder", orderData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
    } catch (error) {
      console.error("Error creating order: ", error.response.data); // Exibe o erro detalhado
    }
  }

  return (
    <div className="flex">
      <SideBar />
      <div>
        <div className="w-full flex flex-col px-6 py-12 gap-2">
          <h1 className="text-5xl">Criar Pedido</h1>
          <label htmlFor="">Cliente:</label>
          <input type="text" ref={inputClient} />
          <label htmlFor="">Produto:</label>
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            ref={inputProduct}
          />
          {query ? (
            <div className="w-full bg-white flex flex-col overflow-y-auto max-h-[300px] border rounded-md">
              {results
                .filter((item) =>
                  item.toLowerCase().includes(query.toLowerCase())
                )
                .map((item, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setQuery(item)}
                      className="py-2 px-5 hover:bg-[#efefef] flex items-start text-base font-medium rounded-none"
                    >
                      {item}
                    </button>
                  );
                })}
            </div>
          ) : null}
          <label htmlFor="">Quantidade:</label>
          <input type="number" ref={inputQuantity} />
          <label htmlFor="">Data de Entrega:</label>
          <input type="date" ref={inputDeliveryDate} />
          <div className="w-full flex justify-end">
            <button
              className="bg-[#3444F7] text-white"
              onClick={() => setOpen(!open)}
            >
              AVANÇAR
            </button>
          </div>
        </div>
        {open ? (
          <div className="flex flex-col gap-4">
            {productDescription.map((item, index) => {
              return (
                <div key={index} className="w-full flex flex-col px-6 gap-2">
                  <h1>Item {index + 1}</h1>
                  <input type="text" defaultValue={item.item} />
                  <input type="text" defaultValue={item.unit} />
                  <input type="text" defaultValue={item.quantity} />
                </div>
              );
            })}
            <button className="bg-[#3444F7] text-white" onClick={createOrder}>
              CRIAR
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
