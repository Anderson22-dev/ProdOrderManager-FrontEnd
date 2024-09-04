import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup/SignUp";
import { SignIn } from "./pages/signin/SignIn";
import ViewOrders from "./pages/vieworders/ViewOrders.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/cadastro" element={<SignUp />}></Route>
          </Route>
          {/* <Route element={<SideBar />}> */}
          <Route path="/vieworders" element={<ViewOrders />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
