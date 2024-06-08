import React from 'react';
import { FaRegEdit, FaUsers, FaRecycle, FaQuoteLeft, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    text: "It's truly the vibe that people want when attending a webinar or online event.",
    author: "Brendan H., Founder & Advisor",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkcLzMA-T9eFeVSSCskyq63q4zPb10Jyl6A&s"
  },
  {
    text: "It's truly the vibe that people want when attending a webinar or online event.",
    author: "Brendan H., Founder & Advisor",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMWpHRcPYj_KWBhP2Cm3OjWBEiGY_x7CQ4w&s"
  },
  {
    text: "It's truly the vibe that people want when attending a webinar or online event.",
    author: "Brendan H., Founder & Advisor",
    rating: 5,
    image: "https://img.freepik.com/premium-photo/portrait-man-binary-code-numbers-technology-cyberspace-programming-concept-generative-ai_791958-3154.jpg"
  },
  // Add more reviews as needed
];

const Overview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="bg-[#fdf9f6] p-6 pt-0 min-h-screen w-[100vw]">
      <div className="mb-1">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Platform Overview</h1>
              <div className="flex justify-center my-[90px]">
        <Slider {...settings} className="w-3/4">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center relative">
              <img src={review.image} alt="Reviewer" style={{height:"50px", width:"50px"}} className="rounded-full w-12 h-12 mx-auto mb-4" />
              <FaQuoteLeft className="absolute top-0 left-0 text-6xl text-gray-200 opacity-25" />
              <p className="text-lg text-gray-700">{review.text}</p>
              <p className="text-sm text-gray-500 mt-2">{review.author}</p>
              <div className="flex justify-center mt-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 w-full pr-4">
        <div className="bg-black p-6 rounded-lg shadow-lg text-white text-center hover:bg-gray-800 transition duration-300">
          <FaRegEdit className="text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Create</h2>
          <p>Streamline the webinar registration process and maximize attendance rates with seamless integrations.</p>
          <a href="#" className="text-blue-400 hover:underline mt-4 block">Learn more</a>
        </div>
        <div className="bg-black p-6 rounded-lg shadow-lg text-white text-center hover:bg-gray-800 transition duration-300">
          <FaUsers className="text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Engage</h2>
          <p>Deliver an unforgettable attendee experience with Welcome Studio and our intuitive webinar software features.</p>
          <a href="#" className="text-blue-400 hover:underline mt-4 block">Learn more</a>
        </div>
        <div className="bg-black p-6 rounded-lg shadow-lg text-white text-center hover:bg-gray-800 transition duration-300">
          <FaRecycle className="text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Repurpose</h2>
          <p>Powered by AI, Content Creator scans your webinars and transforms them into shareable video content, instantly.</p>
          <a href="#" className="text-blue-400 hover:underline mt-4 block">Learn more</a>
        </div>
      </div>
      <button className="bg-blue-600 text-white my-8 px-3 py-3 mr-4 rounded-3xl shadow-lg hover:bg-blue-700 transition duration-300">See all features</button>
    </div>
  );
};

export default Overview;
