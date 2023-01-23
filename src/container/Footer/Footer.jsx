import React, { useState } from "react";
import "./Footer.scss";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!username || !email || !message) {
      alert("All fields required");
    } else {
      setLoading(true);
      const contact = {
        _type: "contact",
        name: username,
        email: email,
        message: message,
      };

      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h2 className="head-text">Take coffee & chat with Us</h2>

      <div className="footerWrapper">
        {/* the first side */}
        <div className="textandEmail">
          <div className="app__footer-cards">
            <div className="app__footer-card ">
              <img src={images.email} alt="email" />
              <a href="mailto:darbyles303@gmail.com" className="p-text">
                darbyles303@gmail.com
              </a>
            </div>
            {/* calls */}
            <div className="app__footer-card">
              <img src={images.mobile} alt="phone" />
              <a href="tel:0792 953198" className="p-text">
                0798 556471
              </a>{" "}
            </div>
          </div>
          {/*  */}
          {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
              <div className="app__flex">
                <input
                  className="p-text"
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  value={username}
                  onChange={handleChangeInput}
                  required
                />
              </div>
              <div className="app__flex">
                <input
                  className="p-text"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                  required
                />
              </div>
              <div>
                <textarea
                  className="p-text"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                  required
                />
              </div>
              <button type="button" className="p-text" onClick={handleSubmit}>
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </div>
          ) : (
            <div>
              <h3 className="head-text">Thank you for getting in touch!</h3>
            </div>
          )}
        </div>

        {/* the second side */}
        <div className="iframeCover">
          <p>Visit us physically</p>
          <iframe
            title="daystar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.062224200376!2d37.04560260765989!3d-1.445705128560209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f77034419022f%3A0x6f243216f54aaac2!2sDaystar%20University-Athi%20River%20Campus!5e0!3m2!1sen!2ske!4v1662192773551!5m2!1sen!2ske"
            width="100%"
            height="100%"
            // style= {{}}"border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/*  */}
    </>
  );
};

// export default Footer;
export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
