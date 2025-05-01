import React from 'react';
import FlightBooking from './FlightBooking';
import FlightsSection from './FlightsSection';
import TravelExpectations from './TravelExpectations';
import FAQAccordion from './FAQAccordion';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="font-sans">
      <FlightBooking />

      {/* Trust Bar */}
      <div className="bg-gray-100 w-full py-4 px-2">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
          <div className="text-sm md:text-base">
            Our Customers <span className="font-semibold text-green-700">trust us!</span>
          </div>
          <div className="text-sm md:text-base text-green-600 font-medium">Excellent</div>
          <div className="text-sm md:text-base">
            Top rated <span className="font-semibold text-orange-500">4.7</span> out of 5, based on{' '}
            <span className="font-semibold text-orange-500">2,197</span> reviews
          </div>
        </div>
      </div>

      {/* Flights Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <FlightsSection />
      </div>

      {/* Travel Expectations Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <TravelExpectations />
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <FAQAccordion />
      </div>

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
