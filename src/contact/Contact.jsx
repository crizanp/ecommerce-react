import React from "react";
import PageHeader from "../components/PageHeader";
const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
  "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
  {
    imgUrl: "/src/assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: "/src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632,02 982 745",
  },
  {
    imgUrl: "/src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: "/src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];

const Contact = () => {
  return (
    <div>
      <PageHeader title={"Contact Us"} curPage={"Contact"} />
      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>
          <section className="section-wrapper">
            <div className="row flex-row-reverse">
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {contactList.map((item, index) => (
                    <div className="contact-item" key={index}>
                      <div className="contact-thumb">
                        <img src={item.imgUrl} alt={item.imgAlt} />
                      </div>
                      <div className="contact-content">
                        <h4 className="title">{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                <div className="col-xl-8 col-lg-7 col-12">
                    <div className="contact-form">
                        <div className="section-header">
                        <p className="title">{conTitle}</p>
                        </div>
                        <form action="#">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="input-item">
                                <input type="text" placeholder="Your Name" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item">
                                <input type="email" placeholder="Your Email" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item">
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item">
                                <input type="text" placeholder="Subject" />
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="input-item">
                                <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                                placeholder="Write Message"
                                ></textarea>
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="input-item text-center">
                                <button className="btn btn-primary">{btnText}</button>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>{" "}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
