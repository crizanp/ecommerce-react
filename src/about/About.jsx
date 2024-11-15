import React from "react";
import PageHeader from "../components/PageHeader";

const About = () => {
  const subTitle = "Your Trusted Social Media Enhancement Partner";
  const title = "Boost Your Online Presence with Us";
  const desc =
    "We specialize in providing high-quality services to enhance your social media engagement. Our range of offerings includes boosting likes, followers, views, and engagement across popular platforms like Instagram, Facebook, TikTok, and more.";

  const year = "10+";
  const expareance = "Years Of Experience";

  return (
    <div>
      <PageHeader title={"About Our Brand"} curPage={"About"} />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                {/* Your about images */}
                <div className="about-thumb">
                  <img src="/src/assets/images/about/01.jpg" alt="About" />
                </div>
                <div className="abs-thumb">
                  <img src="/src/assets/images/about/02.jpg" alt="About" />
                </div>
                {/* Experience section */}
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{expareance}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-right">
                {/* Section header and description */}
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>
                {/* Other content or features can be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
