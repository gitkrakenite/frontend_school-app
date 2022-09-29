import React, { useState, useEffect } from "react";
import "./Skills.scss";

import { motion } from "framer-motion";
// import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <div>
      <h2 className="head-text"> Skills & Experiences</h2>

      <div className="appSkillsWrapper">
        <motion.div className="app__skills_list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills_item"
              key={skill.name}
            >
              <div
                className="app_content"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text" style={{ textAlign: "center" }}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Text content */}
        <div className="text_content">
          <div className="separator" />

          <div className="main_text">
            <h3>Tech Stack</h3>
            <p>
              Since technology is always evolving, we are a community that is
              always learning and adapting to the current most in demand
              technologies.{" "}
            </p>
            <p>
              We innovate with relevant tech stacks that are well appreciated by
              the market. Learning and building is our specialty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default ;
export default AppWrap(Skills, "skills");
