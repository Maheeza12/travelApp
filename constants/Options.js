export const SelectTravelersList = [
    {
      id: 1,
      title: 'Just Me',
      desc: 'Solo traveler on an adventure',
      icon: '✈️',
      people: '1 people',
    },
    {
      id: 2,
      title: 'Couple',
      desc: 'Perfect for two lovebirds',
      icon: '👩‍❤️‍👨',
      people: '2 people',
    },
    {
      id: 3,
      title: 'Family',
      desc: 'Memories with your loved ones',
      icon: '👨‍👩‍👧‍👦',
      people: '3-5 people',
    },
    {
      id: 4,
      title: 'Friends',
      desc: 'A bunch of thrill seekers',
      icon: '🍻',
      people: '5-10 people',
    },
  ];

  export const SelectBudgetOptions = [
    {
      id: 1,
      title: 'Cheap',
      desc: 'Budget-friendly and practical',
      icon: '💸',
    },
    {
      id: 2,
      title: 'Moderate',
      desc: 'Balanced comfort and value',
      icon: '💰',
    },
    {
      id: 3,
      title: 'Luxury',
      desc: 'Premium stays and experiences',
      icon: '💎',
    },
  ];

  export const AI_PROMPT='Generate Travel Plan for Location:{location}, for {totalDays} Days and {totalNights} Night for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking uri, Hotel options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Uri, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON format.'