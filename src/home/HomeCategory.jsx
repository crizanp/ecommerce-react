import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const btnText = "Get Started Now";

export const categoryList = [
  {
    imgUrl: "assets/images/category/premium-service.png",
    imgAlt: "category of premium services",
    iconName: "icofont-brand-windows",
    url:"/category/Premium%20Services",
    title: "Premium",
  },
  {
    imgUrl: "assets/images/category/gaming-topup.png",
    imgAlt: "category gaming topup",
    iconName: "icofont-brand-windows",
    url:"/category/Gaming",
    title: "Gaming",
  },
  {
    imgUrl: "assets/images/category/graphics-design.png",
    imgAlt: "category graphics design",
    url:"/category/Graphics Design",
    iconName: "icofont-brand-windows",
    title: "Graphics Design",
  },
  {
    imgUrl: "assets/images/category/social-services.png",
    imgAlt: "category social services",
    url:"/category/Social%20Media%20Services",
    iconName: "icofont-brand-windows",
    title: "Social Media Services",
  },
  {
    imgUrl: "assets/images/category/streaming.png",
    imgAlt: "category streaming",
    url:"/category/Streaming",
    iconName: "icofont-brand-windows",
    title: "Streaming",
  },
  {
    imgUrl: "assets/images/category/tiktok-grow.png",
    imgAlt: "category tiktok grow",
    iconName: "icofont-brand-windows",
    url:"/search/Tiktok",
    title: "Tiktok",
  },
  {
    imgUrl: "assets/images/products/instagram-category.png",
    imgAlt: "category instagram ",
    url:"/search/instagram",
    iconName: "icofont-brand-windows",
    title: "Instagram",
  },
  {
    imgUrl: "assets/images/products/facebook-category.png",
    imgAlt: "category facebook",
    url:"/search/facebook",
    iconName: "icofont-brand-windows",
    title: "Facebook",
  }
  
  
];

const HomeCategory = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayedCategoryList = categoryList.slice(0, 10);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Render the Slider component only if the screen width is above a certain threshold
  if (windowWidth > 768) {
    return (
      <div
        className="category-section style-4 padding-tb"
        style={{ backgroundColor: "rgb(198 221 255)" }}
      >
        <div className="container">
          <h4 className="text-left px-2" style={{ color: "rgb(51 65 85" }}>
            Browse Category
          </h4>
          <div className="section-wrapper">
            <Slider {...settings}>
              {displayedCategoryList.map((val, i) => (
                <div key={i} className="col p-0 m-0">
                  <Link to={`${val.url}`} className="category-item">
                    <div className="category-inner">
                      <div className="category-thumb">
                        <img
                          src={val.imgUrl}
                          alt={val.imgAlt}
                          style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      {/* <div className="category-content">
                        <Link to="/shop">
                          <h6 className="bg-dark px-2">{val.title}</h6>
                        </Link>
                      </div> */}
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  } else {
    // Render alternative content for small devices
    return (
      <div className="category-section style-4 padding-tb">
        <h4 className="text-left px-2" style={{ color: "rgb(51 65 85" }}>
          Browse Category
        </h4>

        <div className="container">
          <div className="section-wrapper">
            <div className="row justify-content-center row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
              {displayedCategoryList.map((val, i) => (
                <div key={i} className="col p-0 m-0">
                  <Link to={`/search/${val.title}`} className="category-item">
                    <div className="category-inner">
                      <div className="category-thumb">
                        <img
                          src={val.imgUrl}
                          alt={val.imgAlt}
                          style={{
                            width: "100%",
                            height: "205px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      {/* <div className="category-content">
                      <Link to="/shop">
                        <h6 className="bg-dark px-2">{val.title}</h6>
                      </Link>
                    </div> */}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const CustomPrevArrow = (props) => (
  <div
    className="custom-prev-arrow"
    onClick={props.onClick}
    style={{ zIndex: 1 }}
  >
    <i className="icofont-arrow-left"></i>
  </div>
);

const CustomNextArrow = (props) => (
  <div
    className="custom-next-arrow"
    onClick={props.onClick}
    style={{ zIndex: 1 }}
  >
    <i className="icofont-arrow-right"></i>
  </div>
);

export default HomeCategory;
