import React, { useState } from 'react';

const destinations = [
    { city: 'Rome', price: '₹176,023', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeOl3ez1ja5rFh1tpOm3Ox5AVVXEfyC9dk7-siG8R0A88D1hHzuO1T75QAMInXtirSqYw&usqp=CAU', region: 'Europe' },
    { city: 'London', price: '₹187,543', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9uJTIwY2l0eXNjYXBlfGVufDB8fDB8fHww', region: 'Europe' },
    { city: 'Barcelona', price: '₹174,828', image: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFyY2Vsb25hfGVufDB8fDB8fHww', region: 'Europe' },
    { city: 'Amsterdam', price: '₹174,059', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhC1OcN8TCwaiS1lZmAv_EEkTFqVNvYI4ZA&s', region: 'Europe' },
  
    // Africa
    { city: 'Cape Town', price: '₹190,100', image: 'https://images.unsplash.com/photo-1552596160-2972cb5d9fc2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcGV0b3dufGVufDB8fDB8fHww', region: 'Africa' },
    { city: 'Johannesburg', price: '₹185,700', image: 'https://media.gettyimages.com/id/697945296/photo/johannesburg-evening-cityscape-of-hillbrow.jpg?s=170667a&w=gi&k=20&c=7fc5Lmf1jxlSs4N7HFpjYB-0CiKQzz6uxuoWdQn6nTs=', region: 'Africa' },
    { city: 'Marrakech', price: '₹179,500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRks9kMf7ElaSM8_a0nIADLUPZ5nZn2ygh60A&s', region: 'Africa' },
    { city: 'Nairobi', price: '₹182,200', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKk-pgVZN7ytY9hULAqXVDEXEJUI4Fi1Gjfg&s', region: 'Africa' },
  
    // South America
    { city: 'Buenos Aires', price: '₹200,500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPJg-RmPePPCepbzgJMoHYUS8a3onj3YQZg&s', region: 'South America' },
    { city: 'Rio de Janeiro', price: '₹210,300', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYdUgq9NkGadkR2EhkEC_BUaTVEjkySlDLg&s', region: 'South America' },
    { city: 'Lima', price: '₹198,700', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEajuEy1s5u0Pvo53HJ9zLBWNf5wMiH_YkzA&s', region: 'South America' },
    { city: 'Santiago', price: '₹202,150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwW9TBIsnhFvUowsordRLO312vs7q3-TpYA&s', region: 'South America' },
  
    // Middle East
    { city: 'Dubai', price: '₹220,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRBw7DRtrY6BUD6dpqAncYsMvXGgUfY8eTQ&s', region: 'Middle East' },
    { city: 'Doha', price: '₹218,500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7y-Fx2_HZiUubECANA_HHMa8EvjCw0Om3A&s', region: 'Middle East' },
    { city: 'Abu Dhabi', price: '₹221,400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABRtuSCAtRiEi2RObijAQXfIhTPVmEovFhQ&s', region: 'Middle East' },
    { city: 'Riyadh', price: '₹215,900', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWm-G-y_VGWNl0fl-VeiirByy1VpNALoO6g&s', region: 'Middle East' },
  
    // South Asia
    { city: 'Delhi', price: '₹150,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbVuTTFGrcMALs5RrftHjePAcY4MvRFkkww&s', region: 'South Asia' },
    { city: 'Mumbai', price: '₹152,500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRof2iia7e7CQRNbZuvkGzS3VkXFSE7JMIXmg&s', region: 'South Asia' },
    { city: 'Kathmandu', price: '₹148,300', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKNLILs8DsGIYX1bbHoCVDMLkSr3DfWVR3Q&s', region: 'South Asia' },
    { city: 'Colombo', price: '₹149,800', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58UDncF5EM8jHmmVgvpizFJbo9MdpfH5GSg&s', region: 'South Asia' },
  
    // Asia & Oceania
    { city: 'Sydney', price: '₹250,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOumUG_5vcTzC5J2_x9i79vJOM_KLG_yCMA&s', region: 'Asia & Oceania' },
    { city: 'Melbourne', price: '₹252,300', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkgWUIKuEpdgod8LuWE-IXJVKu0G0KNoxgA&s', region: 'Asia & Oceania' },
    { city: 'Auckland', price: '₹255,100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3s6RyKe60dZNDB-x1RC39Oa70q3mkYB-zmg&s', region: 'Asia & Oceania' },
    { city: 'Tokyo', price: '₹245,700', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDX1hkHriogM4qX04N3Qp8M70gtjc46Xiwg&s', region: 'Asia & Oceania' },
  
    // Caribbean
    { city: 'Nassau', price: '₹230,500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8r1AigR1vduvvbt8QLEXPCloyzORWGrfdQ&s', region: 'Caribbean' },
    { city: 'Kingston', price: '₹228,300', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OlFQwebSmXhPaH8NLl3d5ihQ7swOtJeH6g&s', region: 'Caribbean' },
    { city: 'San Juan', price: '₹232,100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkPAgw5FqIwUjnYm8SuGtd4FvFl1xNbZY0Q&s', region: 'Caribbean' },
    { city: 'Bridgetown', price: '₹229,700', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGh4GoD75W1xvpeYJ3nUHWRhPdKBypheidg&s', region: 'Caribbean' },
];

const filters = ['Europe', 'Africa', 'South America', 'Middle East', 'South Asia', 'Asia & Oceania', 'Caribbean'];

const FlightsSection = () => {
  const [selectedRegion, setSelectedRegion] = useState('Europe');

  const filteredDestinations = destinations.filter(dest => dest.region === selectedRegion);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl sm:text-3xl font-bold uppercase">
        Affordable Business Class <span className="text-orange-500">Flights</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
        Arangrant’s negotiated contracts and agreements with major airlines enable us to provide cheap flights business class, and first-class offers with discounts of up to 70%. Our primary goal is to earn customer loyalty and trust and establish an enviable reputation for quality travel planning & booking service.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => setSelectedRegion(filter)}
            className={`px-4 py-2 rounded border ${
              selectedRegion === filter ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            } hover:bg-gray-800 hover:text-white transition`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Destination Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={dest.image} alt={dest.city} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg text-left font-semibold">{dest.city}</h3>
                <p className="text-sm text-left text-gray-500">Business class from*</p>
                <div className='flex justify-between items-center'>

                <div className="mt-2 text-xl font-bold">{dest.price}</div>
                <button className="mt-3 px-5 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition">
                  Book
                </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No destinations available in {selectedRegion}.</div>
        )}
      </div>
    </div>
  );
};

export default FlightsSection;
