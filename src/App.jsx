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
import HostLogin from "./pages/HostLogin";
import HostDashboard from "./pages/HostDashboard";
import HostBookings from "./pages/HostBookings";
import AddProperty from "./pages/AddProperty";
import SearchResults from "./pages/SearchResults.jsx";

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
          path="/"
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
        <Route
          path="/host/login"
          element={<HostLogin />}
        />

        <Route
          path="/host"
          element={<HostDashboard />}
        />

        <Route
          path="/host/bookings"
          element={<HostBookings />}
        />
        <Route
          path="/host/add-property"
          element={<AddProperty />}
        />
        <Route
          path="/search"
          element={<SearchResults />}
        />

      </Routes>
    </div>
  );
}

export default App;