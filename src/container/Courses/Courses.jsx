import React from "react";
import "./Courses.scss";

import { AppWrap } from "../../wrapper";

const whatWeOffer = [
  {
    id: 1,
    title: "Certifications",
    picture:
      "https://images.pexels.com/photos/8524962/pexels-photo-8524962.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "We give certifications in Huawei, Google, IBM and many more. Visit us today",
  },
  {
    id: 2,
    title: "Computer Repair",
    picture:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "We fix computers and laptops at a small cost. We also optimize for better service",
  },
  {
    id: 3,
    title: "Resource Requisitions",
    picture:
      "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Not sure which machine is right for you ? We offer the best guidance. Visit us",
  },
  {
    id: 4,
    title: "App development",
    picture:
      "https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Do you need an app for you business or side hustle ? We offer the best quality",
  },
  {
    id: 5,
    title: "Cyber Security",
    picture:
      "https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "It's better to be safe than sorry. Visit us to check for virus or malware",
  },
  {
    id: 6,
    title: "Operating System",
    picture:
      "https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Moving to a new OS can be scary. We are here to hold your hand every step of the way",
  },
];

const Courses = () => {
  return (
    <div className="offerWrapper">
      <h2>What We Offer</h2>
      <div className="separator" />
      <div className="offerContainer">
        {whatWeOffer.map((offer) => (
          <div key={offer.id}>
            <h4>{offer.title}</h4>
            <img src={offer.picture} alt="pic" />
            <h5>{offer.description}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default ;
export default AppWrap(Courses, "offer");
