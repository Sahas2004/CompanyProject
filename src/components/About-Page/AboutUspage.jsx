import React from "react";
import "./AboutUspage.css";
import aboutImg from "../../assets/aboutImg.jpg";

const AboutUspage = () => {
  return (
    <section className="about-university">
      <div className="about-image">
        <img src={aboutImg} alt="Graduates" />
       
      </div>
      <div className="about-content">
        <h5>ABOUT Us</h5>
        <h2>
          Bridging the Gap Between Talent <br /> & Industry Needs
        </h2>
        <p>
          At Mindcrafters, we are dedicated to finding the perfect synergy
          between talent and company culture. We believe that hiring is more
          than just filling roles—it’s about fostering long-term success by
          ensuring candidates are not only qualified but also aligned with an
          organization’s values and vision. This people-first approach enhances
          employee satisfaction and retention, creating a stronger, more
          cohesive workforce.
        </p>
        <p>
          With a proven track record in streamlining recruitment processes, we
          specialize in improving the quality of hires through precise
          talent-role alignment. Our deep expertise in Executive Search allows
          us to deliver high-impact leadership talent by applying industry best
          practices and strategic insight. Whether for startups or established
          enterprises, Mindcrafters is your trusted partner in building
          high-performing teams that drive sustainable growth.
        </p>
     
        <p>
        <b>
          we don’t just recruit—we craft futures, elevate careers, and help
          organizations thrive through smart, people-first hiring strategies.</b>
        </p>
      </div>
    </section>
  );
};

export default AboutUspage;
