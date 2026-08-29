import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/checkout" element={<Checkout />} />
<Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;