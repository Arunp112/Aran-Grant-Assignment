import React from "react";

// Star Rating component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < fullStars ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.25 3.86a1 1 0 00.95.69h4.104c.969 0 1.371 1.24.588 1.81l-3.32 2.414a1 1 0 00-.364 1.118l1.272 3.94c.3.921-.755 1.688-1.54 1.118l-3.32-2.415a1 1 0 00-1.176 0l-3.32 2.415c-.784.57-1.838-.197-1.539-1.118l1.272-3.94a1 1 0 00-.364-1.118L2.12 9.287c-.783-.57-.38-1.81.588-1.81H6.81a1 1 0 00.95-.69l1.25-3.86z" />
      </svg>
    ));
  return <div className="flex">{stars}</div>;
};

// Review card component
const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-xl shadow p-6 space-y-4">
    <StarRating rating={review.rating} />
    <h3 className="text-lg font-bold truncate">{review.title}</h3>
    <div className="text-gray-700 text-sm">{review.text}</div>
    <div className="text-gray-400 text-xs">{review.date}</div>
    <div className="flex items-center space-x-2">
      <img
        src={review.avatar}
        alt={`${review.name}'s profile`}
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="text-sm font-medium text-gray-900">{review.name}</span>
    </div>
  </div>
);

// Testimonial section
const Testimonials = () => {
  const reviews = [
    {
      rating: 5,
      title: "Nayeli was so patient and a truly godsend",
      text: "Nayeli was so patient and truly a godsend. She was super attentive and took the time to listen to all my concerns while booking a rushed flight for my father...",
      date: "December 15, 2022",
      name: "Hank, USA",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      rating: 5,
      title: "Kevin is phenomenal",
      text: "Kevin is wonderful! Although I am quite picky, he answered all my questions patiently and made this whole transaction smooth...",
      date: "December 13, 2022",
      name: "Gayatri, US",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      rating: 4,
      title: "Outstanding service from Zac",
      text: "This was my first time trying AranGrant. One month before my trip I found out there was a flight change and I wasn’t notified. I tried calling but there was a glitch...",
      date: "December 01, 2022",
      name: "Joan Berinstein, US",
      avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    },
  ];

  return (
    <section className="bg-[#fef9f6] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-2">
          OUR CUSTOMERS ARE OUR <span className="text-orange-500">GREATEST ASSET</span>
        </h2>
        <div className="text-center text-gray-700 mb-8 flex justify-center items-center gap-1">
          <span className="font-semibold text-green-600">Excellent</span>{" "}
          <StarRating rating={5} /> Top rated <strong>4.7</strong> out of 5, based on{" "}
          <strong>2,197</strong> reviews
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
