

import {
  MapPin,
  ExternalLink,
  Shield,
  KeyRound,
  CalendarX,
} from "lucide-react";

function Location({ property }) {
  // ============================================================
  // LOCATION DATA FROM BACKEND
  // ============================================================

  const location = property?.location;

  // ============================================================
  // CREATE READABLE LOCATION NAME
  // ============================================================

  const locationName =
    [
      location?.address,
      location?.city,
      location?.country,
    ]
      .filter(Boolean)
      .join(", ") || "Location unavailable";

  // ============================================================
  // GOOGLE MAP URL
  // ============================================================

  const mapUrl = location?.mapUrl || "";

  return (
    <section className="border-b border-gray-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            TITLE
        ====================================================== */}

        <h2 className="text-2xl font-semibold text-[#222222]">
          Where you'll be
        </h2>

        {/* =====================================================
            LOCATION
        ====================================================== */}

        <div className="mt-2 flex items-center gap-2 text-[#717171]">

          <MapPin size={18} />

          <span>
            {locationName}
          </span>

        </div>

        {/* =====================================================
            GOOGLE MAP
        ====================================================== */}

        {mapUrl ? (
          <div className="relative mt-6 mb-11 overflow-hidden rounded-2xl border border-gray-200">

            <iframe
              src={mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`${property?.title || "Property"} location`}
            />

            {/* Open map externally */}

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium shadow-md transition hover:bg-gray-100"
            >
              <ExternalLink size={16} />

              Open map
            </a>

          </div>
        ) : (
          <div className="mt-6 mb-11 flex h-300px items-center justify-center rounded-2xl border border-gray-200 bg-gray-100">

            <div className="text-center text-gray-500">

              <MapPin
                size={40}
                className="mx-auto mb-3"
              />

              <p>
                Map location is not available.
              </p>

            </div>

          </div>
        )}

        {/* =====================================================
            THINGS TO KNOW
        ====================================================== */}

        <h2 className="border-t border-gray-200 py-11 text-2xl font-semibold text-[#222222]">
          Things to know
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* =================================================
              CANCELLATION POLICY
          ================================================== */}

          <div className="pr-8">

            <CalendarX
              size={28}
              strokeWidth={1.8}
              className="mb-5 text-[#222222]"
            />

            <h3 className="text-base font-semibold text-[#222222]">
              Cancellation policy
            </h3>

            <p className="mt-2 text-base leading-5 text-[#717171]">
              Free cancellation is available up to
              2 days before check-in.
              Cancellations after that may receive
              a partial refund.
            </p>

            <p className="mt-1 text-base leading-5 text-[#717171]">
              Review this host's full policy for
              details.
            </p>

          </div>

          {/* =================================================
              HOUSE RULES
          ================================================== */}

          <div className="border-t border-gray-200 pt-8 md:border-t-0 md:px-8 md:pt-0">

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
              {property?.guests ?? 0} guests maximum
            </p>

          </div>

          {/* =================================================
              SAFETY & PROPERTY
          ================================================== */}

          <div className="border-t border-gray-200 pt-8 md:border-t-0 md:pl-8 md:pt-0">

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

