import { Routes, Route, Navigate } from "react-router-dom";
import { SignUp } from "../pages/signup/SignUp";
import { SignIn } from "../pages/signin/SignIn";
import ViewOrders from "../pages/vieworders/ViewOrders";
import { CreateOrder } from "../pages/createorder/CreateOrder";
import { Order } from "../pages/order/Order";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export function AppRoutes() {
  const { isAuth } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/cadastro" element={<SignUp />} />

      {isAuth ? (
        <>
          <Route path="/vieworders" element={<ViewOrders />} />
          <Route path="/createorder" element={<CreateOrder />} />
          <Route path="/order/:id" element={<Order />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to={"/"} />} />
      )}
    </Routes>
  );
}
