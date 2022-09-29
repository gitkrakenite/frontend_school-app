import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/school/daystar-university/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/DaystarInformationTechnologyAssociation"
          target="_blank"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/dita.daystar/?theme=dark"
          target="_blank"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
