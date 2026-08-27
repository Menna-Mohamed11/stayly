export function PropertyCard({property}) {
    return(
        <div className="overflow-hidden rounded-2xl cursor-pointer">

            <img src={property.image} 
            className="aspect-square h-50 rounded-2xl object-cover transition-transform duration-300 ease-out hover:scale-105"/>

            <div className='mt-3'>
                <div className='flex justify-between'>
                    <h2 className='font-medium'> 
                        {property.title} </h2>

                    
                </div>

                <p className='text-sm text-gray-500'>
                     {property.date}</p>
                <p className='text-sm text-gray-500'>
                     {property.price} <span> ★ {property.rating} </span>
                </p>
                
            </div>
        </div>
    );
}