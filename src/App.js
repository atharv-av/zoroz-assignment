import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import FooterComponet from "./components/FooterComponet";
import Payment from "./pages/Payment";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
      <div>
        <FooterComponet />
      </div>
    </div>
  );
}

export default App;
