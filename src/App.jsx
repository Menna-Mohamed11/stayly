import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/profile";
import Wishlist from "./pages/Wishlist";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/confirmation"
          element={<Confirmation />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route 
        path="/wishlist" 
        element={<Wishlist />} 
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;