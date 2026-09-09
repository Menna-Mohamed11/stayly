import React from 'react'
import { useState } from 'react'
import { Navbar } from '../components/Navbar';
import { PropertyGrid } from '../components/PropertyGrid';
import { Footer } from '../components/Footer';
function Home()  {

  const [category, setActiveCategory] = useState("All");

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(0);
  return (
    <div>
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

      <PropertyGrid
        category={category}
        destination={destination}
      />
      <Footer />
    </div>
  )
}

export default Home