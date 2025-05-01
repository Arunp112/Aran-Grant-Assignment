import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How can I get cheap business-class tickets?",
    answer:
      "Finding affordable business-class tickets can be daunting, but Arangrant offers various options to help you discover the best deals. One of the most effective ways to save money on business-class flights is to book your tickets in advance, ideally at least a few months before your travel date. Airlines frequently offer discounts on early bookings, allowing you to take advantage of these deals and reduce expenses. Alternatively, you can be flexible with your travel dates to obtain cheap business-class tickets. Arangrant provides a flexible dates feature, enabling you to search for the most economical flights within a range of dates. You can find better deals by traveling during off-peak times or on weekdays instead of weekends. As a trusted partner of major airlines, Arangrant has exclusive agreements that allow us to provide you with the most suitable and advantageous business-class tickets for your travel needs. Additionally, Arangrant offers special promotions and deals from our airline partners. Be sure to check our website regularly to stay current on the latest offers.",
  },
  {
    question: "How much does it cost to fly business class?",
    answer:
      "The price of flying business class can vary depending on various factors, including the airline, route, and season. For instance, a round-trip business class ticket from New York to London can cost between $1,500 and $3,000. Nevertheless, the cost can be influenced by supply and demand, making it prudent to compare prices and make early bookings to secure the best deals. At Arangrant, we specialize in finding cost-effective business-class options for your travel itinerary. Our team of experts utilizes cutting-edge technology and industry expertise to provide you with the most competitive business-class fares on the market.",
  },
  {
    question: "Which airlines have the best business class?",
    answer:
      "Numerous airlines present top-notch business-class experiences. However, some stand out as the foremost contenders, namely Emirates, Qatar Airways, Singapore Airlines, and Cathay Pacific. These distinguished airlines furnish noise-canceling headphones, privacy screens, access to airport lounges, highly coveted lie-flat seats, and high-quality meals. In this regard, Arangrant can facilitate you in selecting the most suitable business class option tailored to your unique preferences and budget.",
  },
  {
    question:
      "What’s the difference between premium economy and business class on international flights?",
    answer:
      "Premium economy is a class of travel that offers a higher level of comfort and amenities than economy class, while business class represents the pinnacle of luxury travel. The premium economy class is designed to provide passengers with wider seats, increased legroom, and additional amenities such as priority boarding, upgraded meal options, and increased baggage allowances. This makes it an ideal option for those seeking a more comfortable travel experience without incurring significant expenses.However, for the discerning traveler seeking the ultimate in luxury, privacy, and convenience, the business class is the preferred choice. Business class amenities may include lie-flat seats or beds, premium meals, personalized service, and access to exclusive airport lounges. This elevated travel experience offers unmatched levels of comfort, space, and privacy, providing a truly luxurious journey.",
  },
  {
    question: "Are business class and first class the same?",
    answer:
      "Business and first class are distinct travel categories, with first class generally providing an even more abundant travel experience than business class. Business class is recognized for its high level of comfort, providing passengers with luxurious lie-flat seats, premium meal options, and exclusive access to airport lounges, all at a relatively lower cost than first class. On the other hand, the first class takes luxury to a whole new level, with private suites, personal butlers, and exquisite gourmet meals served on fine china. The extravagance of first-class travel is unparalleled and caters to the most discerning passengers seeking an indulgent and unforgettable journey.",
  },
  {
    question: "What does the business class include on international flights?",
    answer:
      ( <div className="space-y-4 text-gray-700">
        <ul className="list-disc list-inside space-y-1">
          <li>Larger seats or lie-flat beds.</li>
          <li>Upgraded meal options.</li>
          <li>Priority boarding and check-in.</li>
          <li>Access to airport lounges.</li>
          <li>Amenity kits with toiletries and travel essentials.</li>
          <li>Larger entertainment screens.</li>
          <li>Increased baggage allowances.</li>
        </ul>
        <p>
          Some airlines also offer in-flight WiFi, power outlets, and USB ports to keep you connected during your flight.
          Personalized service from flight attendants, pre-flight dining options, and the ability to pre-order meals are
          often included as well.
        </p>
      </div>),
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fefdfc] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left text-lg sm:text-xl font-medium text-gray-800 hover:bg-gray-50 transition"
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 text-base sm:text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
