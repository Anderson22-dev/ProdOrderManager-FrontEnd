import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup/SignUp";
import { SignIn } from "./pages/signin/SignIn";
import ViewOrders from "./pages/vieworders/ViewOrders.jsx";
import { CreateOrder } from "./pages/createorder/CreateOrder.jsx";
import { Order } from "./pages/order/Order.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/vieworders" element={<ViewOrders />} />
          <Route path="/createorder" element={<CreateOrder />} />
          <Route path="/order/:id" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
