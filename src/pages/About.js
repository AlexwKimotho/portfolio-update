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
                As a Software Developer at Scope & Impact, I assist the
                development team in designing, developing, and maintaining the
                iSCOPE HR System, a web-based application that automates and
                streamlines human resource management processes. I write and
                test code using various programming languages, such as NextJs
                and Yii2, and collaborate with technical team to identify and
                solve technical problems. I also conduct research on new
                technologies and programming languages, assist with software
                documentation and user manuals, debug and troubleshoot system
                issues, and provide technical support to clients or end-users. I
                am a dedicated and aspiring software engineer with a strong
                desire to learn, grow, and make an impact in the field. I have a
                solid foundation in programming principles and a software
                engineering certificate from Moringa School, where I learned how
                to apply technical skills in a professional environment. I am
                motivated by challenges and opportunities to create innovative
                and user-friendly solutions that can improve lives and
                businesses. I am eager to continue developing my skills and
                knowledge, and to contribute to the success of Scope & Impact
                and its clients.
              </p>
              <p>
                Before joining Scope & Impact, I worked as an ICT officer at the
                Ministry of Health, Kenya, where I was involved in the Chanjo KE
                platform, a project that aimed to improve the vaccination
                coverage and data quality in the country. I headed a team of
                twenty ICT officers that facilitated recording the clients' data
                through the government portal link and supported the vaccine
                outreaches. I also headed a team of six people to configure and
                distribute over 4,000 tablets that were donated to the ministry
                by partners in various counties. I gained valuable experience in
                hardware installation, user support, network configuration, data
                entry, and internal training.
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
