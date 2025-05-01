import React, { useState } from "react";
import { Plane, RefreshCw, Calendar, X } from "lucide-react";
import Header from "./Header";
import { SingaporeAirline } from "../assets/logo";
import AirlineName from "./AirlineName";
import Button from '@mui/material/Button'

export default function FlightBooking() {
  const [tripType, setTripType] = useState("round");
  const [flights, setFlights] = useState([{ from: "", to: "", date: "" }]);
  const [travelers, setTravelers] = useState(1);
  const [travelClass, setTravelClass] = useState("Business");

  const handleFlightChange = (index, field, value) => {
    const updatedFlights = [...flights];
    updatedFlights[index][field] = value;
    setFlights(updatedFlights);
  };

  const addFlight = () => {
    setFlights([...flights, { from: "", to: "", date: "" }]);
  };

  const removeFlight = (index) => {
    const updatedFlights = flights.filter((_, i) => i !== index);
    setFlights(updatedFlights);
  };

  const clearAllFlights = () => {
    setFlights([{ from: "", to: "", date: "" }]);
  };

  const swapCities = (index) => {
    const updatedFlights = [...flights];
    const temp = updatedFlights[index].from;
    updatedFlights[index].from = updatedFlights[index].to;
    updatedFlights[index].to = temp;
    setFlights(updatedFlights);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://www.shutterstock.com/image-photo/asian-woman-sitting-seat-airplane-600nw-2281588097.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-5 pb-8">
        <Header />
      </div>

      <div className="relative z-5 max-w-7xl mx-auto px-4">
        <div className="py-8 text-center sm:text-left ml-6">
          <div className="flex justify-center sm:justify-start mb-4">
            {/* <SingaporeAirline className="w-28 sm:w-36" /> */}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Business Class Flights
          </h1>
          <p className="text-lg sm:text-xl text-white mt-1">
            Save up to 70% on international business class flights
          </p>
        </div>

        <div className="w-full sm:max-w-2xl  max-w-7xl  bg-transparent bg-opacity-90 rounded-lg shadow-lg p-4 sm:p-6">
          {/* Trip Type Buttons */}
          <div className="flex justify-center sm:justify-start mb-4 flex-wrap gap-2">
            {["ROUND TRIP", "ONE WAY", "MULTI CITY"].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setTripType(type);
                  if (type !== "MULTI CITY") clearAllFlights();
                }}
                className={`text-sm font-semibold py-2 px-3 rounded transition ${
                  tripType === type
                    ? "bg-white text-black"
                    : "border border-gray-300 text-white bg-transparent"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Flights Sections */}
          {flights.map((flight, index) => (
            <div key={index} className="mb-4 bg-white rounded-lg p-4 relative shadow">
              {index > 0 && (
                <div className="text-xs text-gray-600 font-bold mb-1">
                  FLIGHT {index + 1}
                </div>
              )}
              {tripType === "MULTI CITY" && flights.length > 1 && (
                <button
                  onClick={() => removeFlight(index)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              )}
              <div className="flex flex-col sm:flex-row gap-2 mb-2">
                {/* From */}
                <div className="relative flex-1">
                  <Plane className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={flight.from}
                    onChange={(e) =>
                      handleFlightChange(index, "from", e.target.value)
                    }
                    placeholder={index === 0 ? "Mumbai (BOM)" : "From"}
                    className="w-full pl-10 pr-10 py-2 border rounded font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    onClick={() => swapCities(index)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
                  >
                    <RefreshCw size={14} />
                  </button>
                </div>

                {/* To */}
                <div className="relative flex-1">
                  <Plane className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={flight.to}
                    onChange={(e) =>
                      handleFlightChange(index, "to", e.target.value)
                    }
                    placeholder="To"
                    className="w-full pl-10 py-2 border rounded font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="relative mb-2">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  value={flight.date}
                  onChange={(e) =>
                    handleFlightChange(index, "date", e.target.value)
                  }
                  className="w-full pl-10 py-2 border rounded font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {index === 0 && (
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full sm:w-1/2 px-3 py-2 border rounded font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} Traveler{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                  <select
                    value={travelClass}
                    onChange={(e) => setTravelClass(e.target.value)}
                    className="w-full sm:w-1/2 px-3 py-2 border rounded font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {["Economy", "Premium Economy", "Business", "First Class"].map(
                      (cls) => (
                        <option key={cls}>{cls}</option>
                      )
                    )}
                  </select>
                </div>
              )}
            </div>
          ))}

          {/* Add & Clear Buttons */}
          {tripType === "MULTI CITY" && (
            <div className="flex justify-between items-center mb-4 text-sm font-semibold text-gray-700">
              <button
                onClick={addFlight}
                className="flex items-center gap-1 text-orange-600 hover:underline"
              >
                <span>+</span> Add another flight
              </button>
              <button
                onClick={clearAllFlights}
                className="flex items-center gap-1 text-red-500 hover:underline"
              >
                <X size={12} /> Clear all
              </button>
            </div>
          )}

          {/* Search Flights Button */}
          <Button variant="contained" className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg text-lg hover:from-orange-600 hover:to-orange-700 transition">
            Search Flights
          </Button>
        </div>

      </div>
      <AirlineName/>
    </div>
  );
}
