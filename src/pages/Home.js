import React, { useEffect } from "react";
import { motion } from "framer-motion";
import PreLoader from "../components/PreLoader";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as ScrollSVG } from "../assets/images/down-scroll.svg";
import { ReactComponent as Triangle } from "../assets/images/triangle.svg";
import { boxHover, boxExit } from "../animations";
import Footer from "../components/Footer";
import AnimateEl from "../components/AnimateEl";

const transition = { duration: 1, ease: "easeInOut", delay: 0.5 };

const text1 = "I create fluid experiences";
const text2 = "with technology.";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "Alex — Developer";
  }, []);

  return (
    <>
      <PreLoader />

      <motion.div
        exit={{ height: "100vh", transition }}
        className="transition2"
      />

      <div className="landing">
        <section className="landing__top">
          <div className="sub">Full-Stack Developer</div>
          <h1 className="landing__main">
            <span className="text-con">
              {text1.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
              <br />
              {text2.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
            </span>
          </h1>
          <h1 className="landing__main2">
            I Create fluid experiences <br /> with technology.
          </h1>
          <div className="links">
            <NavLink className="item" to="/about">
              About Me
            </NavLink>
            <span className="item">—</span>
            <span className="item"><a href="#projects">My Projects</a></span>
          </div>

          <div className="scroll-down">
            <ScrollSVG />
          </div>

          <div className="shapes">
            <div className="main-circle" />
            <div className="shape shape-1" />
            <div className="shape shape-2">
              <Triangle />
            </div>
            <div className="shape shape-3" />
            <div className="shape shape-4" />
          </div>
        </section>

        <section className="landing__work">
          <AnimateEl>
            <div className="title" id="projects">
              My <br /> Projects -
            </div>
          </AnimateEl>
          <div className="boxes">
            <AnimateEl>
              <a
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
                className="box box-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://royalbushsafaris.co.ke/"
              >
                <div className="box-content">
                  <div className="box-anim p-title">Royal Bush Safaris</div>
                  <div className="box-anim p-sub">
                  Book your long awaited Get-Away trip with us for an unforgettable Experience
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="https://Grokart.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="box box-2"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
              >
                <div className="box-content">
                  <div className="box-anim p-title">Grokart</div>
                  <div className="box-anim p-sub">
                  Grokart is an online shopping E-commerce website that is primarily used to sell goods to prospective clients. 
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="https://centadbranding.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="box box-3"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
              >
                <div className="box-content">
                  <div className="box-anim p-title">CentAd Branding</div>
                  <div className="box-anim p-sub">
                  A media marketing and advertising company mainly focused on growing your brand in the most efficient and cost-effective way
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
                className="box box-4"
              >
                <div className="box-content">
                  <div className="box-anim p-title">Alkim Fashion Apparel</div>
                  <div className="box-anim p-sub">
                  This is a simple e-commerce website that is built using React 
                  </div>
                  <div className="box-anim link">Under Construction &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
          </div>
          <a
            href="https://github.com/AlexwKimotho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="more">
              <div className="btn-content">View more projects</div>
            </button>
          </a>
        </section>

        <section className="find-me">
          <div className="title">
            Find <br /> Me{" "}
            <span role="img" aria-label="find-emoji">
              🔎
            </span>
          </div>
          
          <div className="social-boxes">
            <a
              href="https://github.com/AlexwKimotho"
              target="_blank"
              rel="noopener noreferrer"
              className="box github"
            >
              <div className="content">
                <i className="fab fa-github-alt"></i>
                <div className="items">
                  <div className="name">Github</div>
                  <div className="user">/AlexwKimotho</div>
                </div>
              </div>
            </a>
            <a
              href="https://twitter.com/K_wachira_"
              target="_blank"
              rel="noopener noreferrer"
              className="box twitter"
            >
              <div className="content">
                <i className="fab fa-twitter"></i>
                <div className="items">
                  <div className="name">Twitter</div>
                  <div className="user">K_wachira_</div>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/alex-wachira-kimotho-a92a31227/"
              target="_blank"
              rel="noopener noreferrer"
              className="box linkedin"
            >
              <div className="content">
                <i className="fab fa-linkedin-in"></i>
                <div className="items">
                  <div className="name">Linkedin</div>
                  <div className="user">Alex Wachira Kimotho</div>
                </div>
              </div>
            </a>
         
          </div>
        </section>

        <section className="contact">
          <div className="topic">Need a developer ?</div>
          <Link to="/contact">
            <div className="title">Let's Collaborate  &#8594;</div>
          </Link>
        </section>

        {/* footer exported as component */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
