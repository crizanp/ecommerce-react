// import React, { useState } from "react";
// import productData from "../products.json";
// import { Link } from "react-router-dom";
// const title = <h2>Search Your one From <span>Thousand</span> Of Products</h2>;
// const desc = "we have the largest collection of products";
// const bannerList = [
//   {
//     iconName: "icofont-users-alt-4",
//     text: "1.5 mullions of customer",
//   },
//   {
//     iconName: "icofont-notification",
//     text: "more then 2000 merchents",
//   },
//   {
//     iconName: "icofont-globe",
//     text: "24/7 online support",
//   },
// ];
// const Banner = () => {
//     const [searchInput,setSearchInput]=useState("");
//     const [filteredProducts,setFilteredProducts]=useState(productData);

//     const handleSearch=(e)=>{
//        const searchTerm=e.target.value;
//          setSearchInput(searchTerm);

//          //filter products based on search

//          const filtered=productData.filter((product)=>{
//              return product.name.toLowerCase().includes(searchTerm.toLowerCase());
//          });
//          setFilteredProducts(filtered);
//     }
//   return (
//     <div className="banner-section style-4">
//       <div className="container">
//         <div className="banner-content">
//             {title}
//             <form>
//                 <input type="text" placeholder="Search Your Product" id="search" value={searchInput} onChange={handleSearch}/>
//                 <button type="submit"><i className="icofont-search-1"></i></button>
//             </form>
//             <p>{desc}</p>
//             <ul className="lab-ul">
//             {
//                 searchInput && filteredProducts.map((product,i)=><li key={i}>
//                     <Link to={`/shop/${product.id}`}>{product.name}</Link>
//                 </li>)
//             }
//             </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// Slider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homestyle.css";
import { Link } from "react-router-dom";

const SliderComponent = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const customStyle = `
    .slick-next {
      display: none !important;
    }
    .slider-item {
      position: relative;
    }
    .slider-text {
      position: absolute;
      top: 50%;
      left: 10%; /* Adjust the left position as needed */
      transform: translateY(-50%);
      max-width: 40%; /* Adjust the max-width as needed */
    }
=    
  .slider-button{
    background-color: #e75480 ; /* Pink */
    border: none;
    color: black;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    
  
  }
  .slider-button:hover{
    background-color: white ; /* Pink */
    color: #e75480;
   
    
  
  }
    .slider-text {
      
      @media (max-width: 768px) {
        left: 10%;
        max-width: 90%; 
      }
  
      h3 {
  
        @media (max-width: 768px) {
          font-size: 1.5em; 
        }
      }
  
      p {
        
        @media (max-width: 768px) {
          font-size: 1.5em;
          color: black 
        }
        @media (min-width: 768px) {
          font-size: 3em;
          font-weight: bold;
          padding: 0.3em 0em;
          color: black 
        }
      }
    }
  `;

  return (
    <div style={{ paddingTop: "110px" }}>
      <style>{customStyle}</style>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="slider-item">
            <div className="slider-text">
              <h3
                style={{
                  fontSize: "2em",
                  fontWeight: "bold",
                  color: "darkblue",
                }}
              >
                {item.title}
              </h3>
              <p style={{lineHeight:"40px"}}>{item.description}</p>
              <Link to={item.url}> <button
                className="slider-button"
                style={{ fontSize: "1em", padding: "4px" }}
              >
                {item.buttonText}
              </button></Link>
            </div>
            <img src={item.imgUrl} alt={item.imgAlt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
