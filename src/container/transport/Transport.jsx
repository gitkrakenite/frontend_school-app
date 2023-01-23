import React, { useState, useEffect } from "react";
import "./transport.scss";
import { BiBus } from "react-icons/bi";
import AppWrap from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client";

const Transport = () => {
  const [transport, setTransport] = useState([]);

  useEffect(() => {
    const query = '*[_type == "transport"]';

    client.fetch(query).then((data) => {
      setTransport(data);
    });
  }, []);

  return (
    <div className="transportWrapper">
      <h2>Check Commuting Schedules</h2>

      <div className="transportContainer">
        {transport ? (
          transport.map((item) => (
            <div className="transportItem">
              <div className="transportIcon">
                <BiBus style={{ fontSize: "30px", color: "#0759c5" }} />
              </div>

              <div className="transportDetails" key={item._id}>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ fontWeight: "bold" }}>Time : </span>
                  {item.time}
                </p>

                <p>
                  From {item.from} to {item.to}
                </p>

                <p>{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No transport available. Schedules will be updated soon</div>
        )}
      </div>
    </div>
  );
};

export default AppWrap(Transport, "transport");
