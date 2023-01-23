import React from "react";
import "./work.scss";

import { AppWrap } from "../../wrapper";

const Work = () => {
  return (
    <div className="workWrapper">
      <div className="workWrapperContainer">
        <div className="workTyping">
          {/* <div className="workTypingImage">
            <img
              src="https://images.pexels.com/photos/5256142/pexels-photo-5256142.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="typing"
            />
          </div> */}
          {/* <div className="workTypingText">
            <p>
              Do you have that pending typing workload on your shoulders? Is
              your boss breathing down your kneck to meet a strict deadline and
              you're all stressed down? Well, worry no more. We will do the
              typing for you according to your specifications. Reach out to us
              today. Charges from Ksh.20 per page{" "}
              <span
                style={{
                  backgroundColor: "#ccc",
                  padding: "10px",
                  margin: "5px",
                }}
              >
                0798 556471
              </span>
            </p>
          </div> */}
        </div>
        <div className="workWebsite">
          <div className="workWebsiteText">
            <p>
              People are moving to digital presence. Most HR's prefer to take
              one look at your CV instead of combing through pdf(s). Stand out
              today with an online digital presence. Reach out to us today. Our
              charges start from Ksh. 5000
              <span>
                <a href="https://johnportfolio-f8b30.web.app/" target="_blank">
                  {" "}
                  See this example
                </a>
              </span>
            </p>
          </div>
          <div className="workWebsiteImage">
            <img
              src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// export default About;
export default AppWrap(Work, "work");
