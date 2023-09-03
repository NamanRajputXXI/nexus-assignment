import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Clients from "./Clients";
import Platform from "./Platform";
import Teams from "./Teams";
import Footer from "./Footer";
const HomeSections = () => {
  const myRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setSectionVisible(entry.isIntersecting);

      console.log("entry", entry);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <>
      <Header />
      <section className={`${sectionVisible ? "section2" : "section1"}`}>
        <div className="caseStudy">
          <div className="case__study--text">
            <h3>Fintech Solution</h3>
            <p className="subtitle">Transforming Fintech with AI</p>
            <div className="capsules">
              <div className="capsule">Fraud detection </div>
              <div className="capsule">Transaction categorisation</div>
              <div className="capsule">Risk Scoring</div>
            </div>
            <p className={`text ${sectionVisible ? "text-animation" : ""}`}>
              Empower your financial institution with our advanced fintech
              solutions. From real-time fraud detection to easy bookkeeping, our
              software development services provide credit risk scoring for
              accurate lending eligibility, transaction categorization for
              seamless organization, and anomaly detection to safeguard your
              assets
            </p>
            <div className="caseStudy__button">
              <button>See full case Study </button>
            </div>
          </div>
          <div className="image">
            <img
              height={450}
              alt="Brilliant Move"
              src="https://geeksinvention.com/assets/v3/industry-fintech.svg"
            />
          </div>
        </div>
        <div className="caseStudy">
          <img
            ref={myRef}
            height={400}
            alt="Brilliant Move"
            src="https://geeksinvention.com/assets/v3/industry-iot.webp"
          />
          <div className="case__study--text">
            <h3>Industrial IoT</h3>
            <p className="subtitle">Providing a better connected experience</p>
            <div className="capsules">
              <div className="capsule">Connected manufacturing</div>
              <div className="capsule">Aviation</div>
              <div className="capsule">Smart Building</div>
            </div>
            <p className="text">
              Revolutionize your industry with our innovative IoT solutions. Our
              software development services offer connected manufacturing,
              pollution control, smart transportation, and intelligent farming,
              agriculture, and forestry. With our expertise, you can harness the
              power of technology to increase efficiency, reduce waste, and
              optimize operations for a sustainable future.
            </p>
            <div className="caseStudy__button ">
              <button>See full case Study </button>
            </div>
          </div>
        </div>
        <div className="caseStudy">
          <img
            height={400}
            alt="Brilliant Move"
            src="https://geeksinvention.com/assets/v3/industry-education.webp"
          />
          <div className="case__study--text">
            <h3>Smart Education</h3>
            <p className="subtitle">Elevate your Education Institution</p>
            <div className="capsules">
              <div className="capsule">Learning Management</div>
              <div className="capsule">Course offering</div>
              <div className="capsule">Professional Training</div>
            </div>
            <p className="text">
              Elevate your education institution with our comprehensive software
              solutions. Learning management, course offerings, professional
              training, certification, and school management tools to streamline
              your operations and enhance your students&apos; learning
              experience. Trust us to provide the cutting-edge technology and
              support you need to thrive in the ever-evolving education
              industry.
            </p>
            <div className="caseStudy__button">
              <button>See full case Study </button>
            </div>
          </div>
        </div>
        <div className="home__section--footer">
          <h3>
            Check out more works by Geeks <br />
            Invention
          </h3>
          <p className="text">
            Our case studies describe design and development solutions
            implemented at our Geeks Invention projects. The stories are a
            valuable resource for those looking to develop their own mobile
            apps.
          </p>
          <div className="caseStudy__button">
            <button>See full case Study </button>
          </div>
        </div>
      </section>
      <Clients />
      <Platform />
      <Teams />
      <Footer />
    </>
  );
};

export default HomeSections;
