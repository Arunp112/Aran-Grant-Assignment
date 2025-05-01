import React, { useState } from "react";
import {
  SingaporeAirlineWithColor,
  EmirateWithColor,
  QatarWithColor,
  SwissWithColor,
  CathayPacificWithColor,
  IberiaWithColor,
} from "../assets/logo";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { Button } from "@mui/material";

const AirlineWorkWith = () => {
  const [message, setMessage] = useState("");

  const handleFlightChange = () => {};
  return (
    <div className="max-w-5xl m-auto">
      <div className="text-center flex justify-center items-center">
        <div>
          <div className="font-semibold text-2xl py-2">
            Airlines we work with
          </div>
          <div>
            As a consolidator, we work with a variety of airlines around the
            world to provide our customers with the best possible travel options
            at competitive prices. Our partnerships with major airlines allow us
            to offer a wide range of flights to destinations across the globe,
            making it easier for our customers to book their travel arrangements
            all in one place.
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-12">
            {[
              SingaporeAirlineWithColor,
              EmirateWithColor,
              QatarWithColor,
              SwissWithColor,
              CathayPacificWithColor,
              IberiaWithColor,
            ].map((LogoComponent, idx) => (
              <div
                key={idx}
                className="w-20 md:w-24 hover:scale-110 transition-transform duration-300"
              >
                <LogoComponent className="w-full h-auto fill-current text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-6xl text-center flex justify-center items-center">
          <div>
            <div className="py-5">
              <div className="font-semibold text-2xl text-center">
                Receive Exclusive{" "}
                <span className="text-orange-500">Flight Offers</span>
              </div>
              <div>
                Subscribe to our newsletter and receive updates on the best
                flight deals
              </div>
            </div>

            <div className="bg-white p-3 rounded flex justify-between  items-center max-w-6xl gap-5">
              <div className="relative flex-1 ">
                <FaRegEnvelopeOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={message}
                  onChange={(e) =>
                    handleFlightChange(index, "to", e.target.value)
                  }
                  placeholder="Enter Message"
                  className="w-full pl-10 py-2 border rounded font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <Button variant="contained">Submit</Button>

            </div>
              <div className="text-sm py-5">By providing your email you consent to receive occasional promotional emails from us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlineWorkWith;
