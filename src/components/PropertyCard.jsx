import img1 from '../assets/cards/1.avif';

export function PropertyCard() {
    return(
        <div className="cursor-pointer">

            <img src={img1} className="aspect-square h-50 rounded-2xl object-cover"/>

            <div className='mt-3'>
                <div className='flex justify-between'>
                    <h2 className='font-medium'> 
                        Apartment in First new Cairo Qism </h2>

                    
                </div>

                <p className='text-sm text-gray-500'>
                     Aug 28 - Sep 2 </p>
                <p className='text-sm text-gray-500'>
                     $120 for 2 night <span> ★ 4.9 </span>
                </p>
                
            </div>
        </div>
    );
}