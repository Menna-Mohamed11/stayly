import { useState } from 'react';

import { Navbar } from './components/Navbar';
import { PropertyGrid } from './components/PropertyGrid';
import { Footer } from './components/Footer';

function App() {
  const [category, setActiveCategory] = useState("All");

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(0);

  return (
    <>
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

    </>
  );
}

export default App;
