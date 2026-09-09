
import { MapPin, ExternalLink ,Shield ,KeyRound,CalendarX} from "lucide-react";

function Location({ property }) {
  return (
    <section className="border-b border-gray-200 pb-10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-[#222222]">
          Where you'll be
        </h2>

        {/* Location name */}
        <div className="mt-2 flex items-center gap-2 text-[#717171]">
          <MapPin size={18} />
          <span>{property.location}</span>
        </div>

        {/* Google Map */}
        <div className="mt-6 mb-11 overflow-hidden rounded-2xl border border-gray-200">
          <iframe
            src={property.mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={`${property.title} location`}
          ></iframe>
        </div>

       <h2 className="border-t border-gray-200 text-2xl font-semibold text-[#222222] py-11">
          Things to know
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3">

    {/* Cancellation policy */}
    <div className="pr-8 ">
      <CalendarX
        size={28}
        strokeWidth={1.8}
        className="mb-5 text-[#222222]"
      />

      <h3 className="text-base font-semibold text-[#222222]">
        Cancellation policy
      </h3>

      <p className="mt-2 text-base leading-5 text-[#717171]">
       Free cancellation is available up to 2 days before check-in.
        Cancellations after that may receive a partial refund.
      </p>

      <p className="mt-1 text-base leading-5 text-[#717171]">
        Review this host's full policy for details.
      </p>

    </div>


    {/* House rules */}
    <div className="border-t border-gray-200 pt-8 md:pt-0 md:border-t-0 md:px-8">
      <KeyRound
        size={28}
        strokeWidth={1.8}
        className="mb-5 text-[#222222]"
      />

      <h3 className="text-base font-semibold text-[#222222]">
        House rules
      </h3>

      <p className="mt-2 text-base leading-5 text-[#717171]">
        Check-in: 3:00 PM - 2:00 AM
      </p>

      <p className="text-base leading-5 text-[#717171]">
        Checkout before 11:00 AM
      </p>

      <p className="text-base leading-5 text-[#717171]">
        {property.guests} guests maximum
      </p>


    </div>


    {/* Safety & property */}
    <div className="border-t border-gray-200  md:border-t-0 pt-8 md:pt-0 md:pl-8">
      <Shield
        size={28}
        strokeWidth={1.8}
        className="mb-5 text-[#222222]"
      />

      <h3 className="text-base font-semibold text-[#222222]">
        Safety & property
      </h3>

      <p className="mt-2 text-base leading-5 text-[#717171]">
        No smoke alarm
      </p>

      <p className="text-base leading-5 text-[#717171]">
        Exterior security cameras on property
      </p>

      <p className="text-base leading-5 text-[#717171]">
        Carbon monoxide alarm
      </p>

      
    </div>

  </div>
      
      </div>
     

    </section>
    
  );
}

export default Location;


