import { Button } from '@mui/material';
import React from 'react';
import { IoCallSharp } from 'react-icons/io5';
import Testimonials from './Testimonials';
import AirlineWorkWith from './AirlineWorkWith';

const data = [
  {
    id: 1,
    title: 'Business class for less',
    description:
      'Arangrant has proprietary fare agreements with major international airlines that give us access to the hidden offers and special deals. Therefore, we provide significantly lower prices on business class tickets to our customers.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjqXwxh_B-DoGePI0QliCevqy3ELJRg9jAQ&s',
  },
  {
    id: 2,
    title: 'Business class for less',
    description:
      'Arangrant has proprietary fare agreements with major international airlines that give us access to the hidden offers and special deals. Therefore, we provide significantly lower prices on business class tickets to our customers.',
    image: 'https://plus.unsplash.com/premium_photo-1661277758451-b5053309eea1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwZmxpZ2h0fGVufDB8fDB8fHww',
  },
  {
    id: 3,
    title: 'Business class for less',
    description:
      'Arangrant has proprietary fare agreements with major international airlines that give us access to the hidden offers and special deals. Therefore, we provide significantly lower prices on business class tickets to our customers.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmfTDgkCYkCOVoHQ_i8ox2nPEwfy7jTi2cw&s',
  },
];

const TravelExpectations = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-20 py-10 rounded-lg shadow-lg border border-gray-200">
        {/* Header */}
        <div className="text-center py-6 border-b border-gray-300 mb-6">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Surpassing Business Class Travel <span className="text-orange-500">Expectations</span>
          </h1>
          <p className="mt-2 text-gray-700">
            Devotion embodies our business as we put our customers’ comfort and pleasure first.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={item.id + index}
              className="bg-white border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded mb-4 text-gray-500">
                  No Image
                </div>
              )}
              <div className="flex items-center gap-2 mb-2">
                <div className="h-5 w-1 bg-orange-500" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-16 border-t pt-10 bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-200">
          <div>
            <img
              src="https://arangrant.com/wp-content/uploads/sites/3/2024/01/consultants-4.png"
              alt="Consultants"
              className="w-60 sm:w-72 mx-auto lg:mx-0"
            />
          </div>
          <div className="text-center lg:text-left max-w-md">
            <h2 className="font-bold text-xl sm:text-2xl mb-2">
              Contact your personal agent 24/7 – make your business class flights cheap & smooth
            </h2>
            <p className="text-gray-600">We provide professional assistance LIVE</p>
          </div>
          <div>
            <Button
              variant="contained"
              className="!bg-green-700 hover:!bg-green-800 px-6 py-3 text-sm sm:text-base shadow-md"
              startIcon={<IoCallSharp />}
            >
              Call Now: +1 (833) 619-0908
            </Button>
          </div>
        </div>
      </div>
      <div className='py-24'>
        <Testimonials/>
      </div>
      <div>
            <AirlineWorkWith/>
      </div>
    </div>
  );
};

export default TravelExpectations;
