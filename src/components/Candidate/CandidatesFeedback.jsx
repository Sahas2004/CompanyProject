import React from "react";
import { Link } from "react-router-dom"; 
import { FeedbackCard } from "./FeedbackCard";
import googleLogo from "../../assets/google-logo.png";

export const CandidatesFeedback = () => {
  const feedbacks = [
    {
      review: "From sourcing to onboarding, the support has been incredible. They feel more like partners than service providers.",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "Their recruitment expertise saved us time and effort. We received qualified applicants within days and filled key roles in record time!",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "Efficient, reliable, and proactive – they've helped us build a strong team with minimal hassle. I highly recommend their HR services.",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "The team truly understood our hiring needs and delivered exceptional candidates faster than expected. Their process is seamless and professional!",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "They don’t just fill positions—they find the perfect fit. Their attention to culture, skills, and long-term potential is unmatched.",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "A highly professional team with great industry insight. They made hiring stress-free and gave us top-tier talent every time.",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
  
  ];

  return (
    <div className="container my-5">
      <div className="cont_of_FeedBack d-flex justify-content-between align-items-center flex-wrap mb-4">
        <div>
          <h2 className="fw-bold text-white" style={{ textShadow : "5px 5px 30px black" }}>Candidates feedback</h2>
          <p className="text-white" style={{ maxWidth: "500px" , textShadow : "5px 5px 30px black"}}>
            "Our candidates value the personal attention and clear communication they receive throughout the hiring process. We match them with the right roles that align with their goals. Their feedback drives us to keep delivering an exceptional experience."
          </p>
        </div>
        <Link to="/about" className="btn btn-dark fw-semibold">About-US</Link>
      </div>

      <div className="row">
        {feedbacks.map((item, index) => (
          <FeedbackCard key={index} {...item} />
        ))}
      </div>

 
    </div>
  );
};