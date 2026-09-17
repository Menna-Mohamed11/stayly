const hostData = {
  account: {
    email: "daif@stayly.com",
    password: "123456",
  },

  profile: {
    name: "Daif",
    email: "daif@stayly.com",
    location: "Cairo, Egypt",
    joined: "2023",
    rating: 4.97,
    reviews: 66,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },

  // These reference IDs from your EXISTING properties.js
  listings: [1],

  bookings: [
    {
      id: 1,
      propertyId: 1,
      guest: "Ahmed Hassan",
      checkIn: "2026-08-10",
      checkOut: "2026-08-14",
      guests: 4,
      amount: 480,
      status: "Completed",
    },

    {
      id: 2,
      propertyId: 1,
      guest: "Sara Mohamed",
      checkIn: "2026-08-20",
      checkOut: "2026-08-25",
      guests: 3,
      amount: 600,
      status: "Completed",
    },

    {
      id: 3,
      propertyId: 1,
      guest: "Omar Ali",
      checkIn: "2026-09-02",
      checkOut: "2026-09-06",
      guests: 2,
      amount: 480,
      status: "Completed",
    },
  ],
};

export default hostData;