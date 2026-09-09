import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PropertyGrid } from './components/PropertyGrid';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  const [category, setActiveCategory] = useState("All");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(0);

  return (
    <BrowserRouter>

      <Navbar
        category={category}
        onCategoryChange={setActiveCategory}
        destination={destination}
        setDestination={setDestination}
        date={date}
        setDate={setDate}
        guests={guests}
        setGuests={setGuests}
      />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <PropertyGrid
                category={category}
                destination={destination}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/confirmation"
          element={<Confirmation />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;