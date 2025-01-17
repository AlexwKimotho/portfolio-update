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
                Results-oriented professional with a track record of driving
                data-driven decision-making, streamlining processes, and
                enhancing system functionality. Skilled in requirements
                gathering, stakeholder management, and delivering innovative
                solutions. Proficient in Agile methodologies and leveraging
                technical expertise to bridge the gap between business needs and
                technology solutions.
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
              <div className="main-title">
                <span>experience.</span>
              </div>

              <div className="companies">
              <div className="company">
                  <div className="name"> The Archangel interactive - (Software Engineer)</div>
                  <div className="year">August 2023 - February 2024</div>
                  <ul className="tasks">
                    <li>
                    Conducted system analysis and troubleshooting, proposing solutions to improve system performance.

                    </li>
                    <li>
                    Designing, developing, and maintaining projects handled by Archangel.

                    </li>
                    <li>
                    Lead testing for the developed project to meet user requirements.
                    </li>
                    <li>
                    Collaborated with cross-functional teams to gather requirements and deliver solutions that aligned with client goals.
                    </li>
                    <li>
                    Identifying potential bugs as well as proposing and implementing  solutions to aid in the software’s functionality.
                    </li>
                   
                  </ul>
                </div>

                <div className="company">
                  <div className="name">Scope and impact - (Software Engineer)</div>
                  <div className="year">March 2023 - July 2024</div>
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
