import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/profile";
import Wishlist from "./pages/Wishlist";
import Trips from "./pages/trips.jsx";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import Photos from "./pages/PropertyDetails/Photos";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/checkout/:id"
          element={<Checkout />}
        />

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

        <Route
          path="/trips"
          element={<Trips />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/property/:id/photos"
          element={<Photos />}
        />
      </Routes>
    </div>
  );
}

export default App;