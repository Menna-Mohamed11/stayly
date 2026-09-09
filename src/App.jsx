import { useState } from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";

import PropertyDetails from './pages/PropertyDetails/PropertyDetails'
import Photos from './pages/PropertyDetails/Photos';
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";

import Home from './pages/Home';


function App() {


  return (
    <div>
      
      <Routes>
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
        <Route path="/checkout/:id" element={<Checkout />} />
       <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  )
}



export default App;

