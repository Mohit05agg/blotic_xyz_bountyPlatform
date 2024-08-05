import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Pagination]);

const feedbacks = [
  {
    id: 1,
    name: "Ayush Dubey",
    feedback:
      "I feel fortunate to work with a team which put it's  faith in each and every member of it. The dedication and commitment of the team always motivates me to push my capabilities to maximum limit.",
    avatar: "https://randomuser.me/api/portraits/lego/5.jpg",
  },
  {
    id: 2,
    name: "Rahul Navgire",
    feedback:
      "It's been great experience collaborating with the Blotic, what excites me more about blotic is the teams vision, passion, and dedication, the team is young and talented, which makes me to  firmly believe, blotic can be a vital community in whole web3 space",
    avatar: "https://randomuser.me/api/portraits/lego/5.jpg",
  },
  {
    id: 3,
    name: "Anjali Bajaj",
    feedback:
      "I am thrilled to share my testimonial for Blotic, a leading Web3 company that has truly revolutionized the way we interact with technology. One of the most impressive aspects of Team Blotic is their dedication to building a truly decentralized ecosystem. ",
    avatar: "https://randomuser.me/api/portraits/lego/3.jpg",
  },

  {
    id: 4,
    name: "Drishti Garg",
    feedback:
      "It was really a very overwhelming and great experience working with team blotic. The team puts tremendous efforts  to channelize the ideas and vision of web3 and  blockchain.",
    avatar: "https://randomuser.me/api/portraits/lego/3.jpg",
  },

  // {
  //   id: 5,
  //   name: "Bob Smith",
  //   feedback:
  //     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //   avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  // },

  // {
  //   id: 6,
  //   name: "Bob Smith",
  //   feedback:
  //     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //   avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
];

const FeedbackSlider = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl mt-20 font-bold text-white text-center mb-12 animate-pulse">
        TESTIMONIALS
      </h1>{" "}
      <Swiper
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        className="my-16"
        slidesPerView={3}
        breakpoints={{
          // when window width is >= 640px
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide key={feedback.id} className="p-4">
            <div className="max-w-lg mx-auto pb-8 pr-4 pl-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-80 transform hover:scale-105 transition duration-500 mb-10">
                <div className="px-6 py-8 sm:p-10">
                  <div className="flex items-center">
                    <img
                      src={feedback.avatar}
                      alt="Avatar"
                      className="h-16 w-16 rounded-full mr-4 border-4 border-white shadow-md"
                    />
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                        {feedback.name}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 pt-2 text-sm lg:text-lg">{feedback.feedback}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSlider;
