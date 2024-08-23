import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup/SignUp";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          {/* <Route path="" element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
