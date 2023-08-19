import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import { fadeUp } from "../animations";
import gsap from "gsap";
import Footer from "../components/Footer";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "Alex — About Me";
    // fadeUp(".about-inner", 0.8);
    gsap.from(".about__inner", {
      duration: 0.2,
      delay: 1,
      opacity: 0,
      ease: "Power4.out",
    });
    gsap.to(".cursor", {
      duration: 0,
      css: { display: "none" },
    });
  }, []);
  return (
    <>
      <motion.div
        initial={{ height: "100%" }}
        // animate={{ height: "0%", transition: { ...transition, delay: 1 } }}
        className="transition"
      />
      <motion.div
        exit={{ height: "100%", transition }}
        className="transition2"
      />
      <motion.div
        initial={{ height: 0, visibility: "hidden" }}
        animate={{
          height: "100%",
          visibility: "visible",
          transition: { ...transition, duration: 2, delay: -0.2 },
        }}
        className="about"
      >
        <div className="about__inner">
          <div className="about__top">
            <div className="my-name">
              Alex <br /> Wachira <br /> Kimotho.
            </div>
            <div className="desc">
              <p>
                Software Developer based in Nairobi, Kenya focused on building
                interactive experiences & creating fluid and responsive
                experiences through design and technology.
              </p>
              <p>
                I am Strong in design and integration with intuitive
                problem-solving skills. Proficient in React, JavaScript and
                NextJs. I am Passionate about implementing Solutions that make a
                difference in our world.
              </p>
            </div>
            <a
              href="https://docs.google.com/document/d/10sLVB2MlcPV6IKihtjPhNy1ORXYGJBss0wTyy-Gc39I/edit?usp=sharing"
              download
            >
              <i className="fas fa-file-alt"></i> Download Resume
            </a>
          </div>

          <div className="about__bottom">
            <div className="experience">
              <div className="stack main-title">
                <span>Stack.</span>
              </div>

              <div className="companies">
                <div className="company">
                  <div className="name tech">Core Tech:</div>
                  <ul className="tasks">
                    <li>JavaScript</li>
                    <li>NextJS</li>
                    <li>REST APIs</li>
                    <li>SQLite3</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>ReactJs</li>
                    <li>Rails</li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name tech">Familiar:</div>
                  <ul className="tasks">
                    <li>Django</li>
                    <li>Ruby on Rails</li>
                    <li>UI/UX</li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name tech">On The Job:</div>
                  <ul className="tasks">
                    <li>Responsive Design.</li>
                    <li>Version Control.</li>
                    <li>JavaScript best practices, clean code.</li>
                    <li>Continuous Integration/Development.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="experience">
              <div className="main-title">
                <span>experience.</span>
              </div>

              <div className="companies">
                <div className="company">
                  <div className="name">Scope and impact</div>
                  <div className="year">March 2023 - Present</div>
                  <ul className="tasks">
                    <li>
                      Assisting development team in designing, developing, and
                      maintaining iSCOPE HR System.
                    </li>
                    <li>
                      Collaborating with technical team to identify and solve
                      technical problems.
                    </li>
                    <li>
                      Worked closely with some of the top customers to review
                      their implementation setups, system upgrades and provided
                      solutions specific to customer requirements.
                    </li>
                    <li>
                      Contributing to the development of software architecture
                      and design patterns.
                    </li>
                    <li>
                      Collaborating with quality assurance teams to ensure the
                      software meets the required quality standards.
                    </li>
                    <li>
                      Providing technical support directly or indirectly to
                      clients or end-users..
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default About;
