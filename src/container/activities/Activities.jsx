import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import "./activities.scss";

import { BiBusSchool } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdOutlineAttachMoney } from "react-icons/md";

const Activities = () => {
  return (
    <div className="activitiesWrapper">
      <h2>Fun activites around Athi River</h2>
      <div className="activitiesContainer">
        {/*  */}
        <div className="activitiesItem">
          <img
            src="https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <FiActivity style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Bike Riding</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <GoLocation style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Noah Distributers</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <MdOutlineAttachMoney style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Price Range: Ksh.100 per hour</span>
          </h5>
        </div>
        {/*  */}
        <div className="activitiesItem">
          <img
            src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <FiActivity style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Hiking</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <GoLocation style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Lukenya Hills</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <MdOutlineAttachMoney style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Price Range: Free</span>
          </h5>
        </div>
        {/*  */}
        <div className="activitiesItem">
          <img
            src="https://images.pexels.com/photos/4984961/pexels-photo-4984961.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <FiActivity style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Swimming</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <GoLocation style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Lukenya Resort</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <MdOutlineAttachMoney style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Price Range: Ksh.400</span>
          </h5>
        </div>
        {/*  */}
        <div className="activitiesItem">
          <img
            src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <FiActivity style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Movies and TV</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <GoLocation style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>TV Room Campus</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <MdOutlineAttachMoney style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Price Range: Free</span>
          </h5>
        </div>
        {/*  */}
        <div className="activitiesItem">
          <img
            src="https://images.pexels.com/photos/38534/giraffe-wild-wildlife-nature-38534.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <FiActivity style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Nature Walk | Safari</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <GoLocation style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Lukenya Hills</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <MdOutlineAttachMoney style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Price Range: Free</span>
          </h5>
        </div>
        {/*  */}
        <div className="activitiesItem">
          <img
            src="https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <FiActivity style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Computer Gaming</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <GoLocation style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Lukenya Resort</span>
          </h5>

          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span>
              <MdOutlineAttachMoney style={{ color: "#0759c5" }} />
            </span>{" "}
            <span>Price Range: Unavailable</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Activities, "activities");
// export default Activities;
