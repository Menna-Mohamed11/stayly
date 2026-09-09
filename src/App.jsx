import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import PropertyDetails from './pages/PropertyDetails/PropertyDetails'
import Photos from './pages/PropertyDetails/Photos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
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
  )
}

export default App
