import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {[
        "home",
        "work",
        "transport",
        "events",
        "accomodation",
        "activities",
        "opportunities",
        "menu",
        "help",
        "contact",
      ].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
