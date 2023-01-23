import React, { useState, useEffect } from "react";
import AppWrap from "../../wrapper/AppWrap";
import "./accomodation.scss";
import { urlFor, client } from "../../client";

const Accomodation = () => {
  const [accomodation, setAccomodation] = useState([]);

  useEffect(() => {
    const query = '*[_type == "accomodation"]';

    client.fetch(query).then((data) => {
      setAccomodation(data);
    });
  }, []);

  return (
    <div className="accomodationWrapper">
      <h2>Check out all available accomodation</h2>

      <div className="accomodationContainer">
        {/*  */}
        {accomodation.map((item) => (
          <div className="accomodationItem" key={item._id}>
            <div className="images">
              <img
                src={urlFor(item.firstPic)}
                alt={item.title}
                // style={{ width: "100px" }}
              />

              <img
                src={urlFor(item.secPic)}
                alt={item.title}
                // style={{ width: "100px" }}
              />
              <img
                src={urlFor(item.thirdPic)}
                alt={item.title}
                // style={{ width: "100px" }}
              />
            </div>
            <div className="details">
              <h3>{item.title}</h3>
              <h4>Price per Month: Ksh. {item.price}</h4>
              <h5>Contact: {item.contact}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Accomodation, "accomodation");
