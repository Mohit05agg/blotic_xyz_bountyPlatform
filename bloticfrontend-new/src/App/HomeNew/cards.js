import { useState } from "react";

import Education from "../../assets/Educationhm.png";
import Emplyoment from "../../assets/HJVJVSVVS.png";
import Bounty from "../../assets/bounty.png";
import Event from "../../assets/Event.png";
import Icon from "../../assets/arrow-right (1).png";

const Cards = () => {
  const [cards] = useState([
    {
      id: 1,
      title: "Education",
      src: Education,
      href: "Learning",
      text: "Students are educated on web3 technology through workshops, hackathons, challenges etc.",
    },
    {
      id: 2,
      title: "Emplyoment",
      src: Emplyoment,
      href: "https://app.recorem.com/event-partner/310/community",
      text: "We provide internship and placement opportunities to students who are a part of the Blotic ecosystem.",
    },
    {
      id: 3,
      title: "Events",
      src: Event,
      href: "events",
      text: "Our events aim to increase awareness and provide practical exposure to students about web3 technology.",
    },
    {
      id: 4,
      title: "Bounty",
      src: Bounty,
      href: "Bounty",
      text: "Discover a world of opportunities with our bounty program. Join our community and start earning!",
    },
  ]);

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="flex flex-wrap justify-center mt-12 lg:mt-0 lg:w-1/2">
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            className="max-w-xs w-full overflow-hidden shadow-md m-1 mb-6 rounded-3xl about-prob-card"
          >
            <img src={card.src} className="  mx-auto" alt="logo" />
            <div className="p-4">
              <a
                href={card.link}
                className="flex items-center text-lg font-bold mb-2"
              >
                <p className="text-lg font-bold text-blue-500 mb-2">
                  {card.title}
                </p>
              </a>

              {/* <h3 className="text-lg font-bold text-blue-500 mb-2">
                {card.title}
              </h3> */}

              <p className="text-neutral-200 h-20  overflow-hidden">
                {showFullText ? card.text : `${card.text.slice(0, 100)}...`}
              </p>
              <a href={card.href}>
                <button className="bg-blue-500 text-gray-200 rounded-md py-1 px-2 text-sm">
                  Read More
                </button>
              </a>

              {/* <p className="text-neutral-200 h-20 overflow-hidden">
                {showFullText ? card.text : `${card.text.slice(0, 100)}...`}
              </p> */}
              {/* {card.text.length > 100 && (
                <button
                  className="text-blue-300 hover:text-blue-500"
                  onClick={toggleShowFullText}
                >
                  {showFullText ? "Read less" : "Read more"}
                </button>
              )} */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
