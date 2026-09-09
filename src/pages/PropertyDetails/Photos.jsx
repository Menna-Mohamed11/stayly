
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import properties from "../data/properties";

function Photos() {
  const { id } = useParams();

  // Find the property using the URL id
  const property = properties.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(null);

 

  return (
    <div className="min-h-screen bg-white">
      
        <div className="px-2 md:px-7 flex h-16 max-w-7xl items-center ">

          <Link
            to={`/property/${property.id}`}
            className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#222222] transition hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
            
          </Link>

        </div>
    


      {/* MAIN*/}
      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

        {/* Page title */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-[#222222] sm:text-4xl">
            Photo tour
          </h1>
        </div>


        {/* ================= PHOTO CATEGORIES ================= */}
        <div className="space-y-14 ">
          
          {Object.entries(property.photoCategories || {}).map(
            ([category, images]) => (

              <section key={category}>

                {/* Category title */}
                <div className="mb-5">
                  <h2 className="text-2xl font-semibold text-[#222222]">
                    {category}
                  </h2>
                </div>


                {/* Images */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                  {images.map((image, index) => (

                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className="group relative overflow-hidden rounded-2xl"
                    >

                      <img
                        src={image}
                        alt={`${category} ${index + 1}`}
                        className="h-62 w-full object-cover "
                      />

                      

                    </button>

                  ))}

                </div>

              </section>

            )
          )}

        </div>

      </main>


      {/* ================= FULLSCREEN IMAGE ================= */}
      {selectedImage && (

        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >

          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#222222] shadow-lg transition hover:bg-gray-100"
            aria-label="Close image"
          >
            <X size={22} />
          </button>


          {/* Selected image */}
          <img
            src={selectedImage}
            alt="Property"
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

        </div>

      )}

    </div>
  );
}

export default Photos;



