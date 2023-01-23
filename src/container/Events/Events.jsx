import React, { useState, useEffect } from "react";
import "./Events.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

import { urlFor, client } from "../../client";

import { motion } from "framer-motion";

import { AiFillEye } from "react-icons/ai";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "events"]';

    client.fetch(query).then((data) => {
      setEvents(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(events);
      } else {
        setFilterWork(events.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className="eventWrapper">
      <h2>
        Check all<span className="eventHighlight"> events</span> in both
        campuses <span className="eventHighlight">D-Events</span>.{" "}
      </h2>

      <div className="app__work-filter">
        {["Upcoming", "NRBI Campus", "Happening", "Recent", "Past", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      {/*  */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((events, index) => (
          <div className="app__work-item app__flex" key={index}>
            {events ? (
              <>
                <div className="app__work-img app__flex">
                  <img
                    src={urlFor(events.imgUrl)}
                    alt={events.name}
                    // style={{ width: "100px" }}
                  />

                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__work-hover app__flex"
                  >
                    <a
                      href={events.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    {/* <a href={events.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a> */}
                  </motion.div>
                </div>

                <div className="app__work-content app__flex">
                  <h4 className="bold-text">{events.title}</h4>

                  <p className="p-text time" style={{ marginTop: 10 }}>
                    {events.time}
                  </p>

                  <p className="p-text" style={{ marginTop: 10 }}>
                    {events.description}
                  </p>

                  <div className="app__work-tag app__flex">
                    <p className="p-text">{events.tags[0]}</p>
                  </div>
                </div>
              </>
            ) : (
              <div>There doesn't seem to be such an event yet</div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// export default ;
export default AppWrap(Events, "events");
