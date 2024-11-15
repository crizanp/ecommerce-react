import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import SliderComponent from './Banner'
import { Helmet } from 'react-helmet'
// const homepageItems = [
//   {
//     imgUrl: "../src/assets/images/banner/premium-service-bg.png",
//     imgAlt: "Item 1",
//     title: "Get Premium Access",
//     description: "Enhance Your Work",
//     buttonText:"Unlock Now",
//     url:"/search/premium"
//   },
//   {
//     imgUrl: "https://toolsmandu.com/wp-content/uploads/2023/09/google-one-1.jpg",
//     imgAlt: "Gain Member",
//     title: "Gain Member",
//     description: "Showcase Your Social Number",
//     buttonText:"Boost Now",
//     url:"/category/Social Media Services"

//   },
//   {
//     imgUrl: "https://toolsmandu.com/wp-content/uploads/2023/09/graphics-suite.jpg",
//     imgAlt: "Item 3",
//     title: "Get Exposure",
//     description: "Advertising your product in larger targetted audience",
//     url:"/search/premium",
//     buttonText:"Contact Us",


//   },
//   // Add more items as needed
// ];

const Home = () => {
  return (

    <div style={{paddingTop:"110px"}}>
    <Helmet>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="Explore a world of possibilities with NDS Nepal's premium services! From gaming enhancements to social media boosts, we offer top-notch products for an enhanced digital experience. Unlock exclusive features, boost engagement, and elevate your online presence. Subscribe now!"/>
    <meta name="keywords" content="gaming enhancements, social media services, premium services, YouTube services, TikTok services, Google services, gift cards, streaming subscriptions, digital products, online engagement, social media boosts, YouTube monetization, YouTube likes, YouTube subscribers, TikTok likes, TikTok views, TikTok followers, Google Play gift card, Netflix subscription, Amazon Prime Video subscription, gaming packages, gaming airdrop, PUBG Mobile UC, Free Fire diamond top-up, Telegram premium, Telegram member increase, YouTube comment increase, Google storage"/>
     <meta name="author" content="Nxtech"/>
    <meta name="robots" content="index, follow"/>
    <meta name="geo.region" content="Nepal"/>
    <meta name="geo.placename" content="Kathmandu, Nepal"/>
    <meta name="geo.position" content="27.7172;85.3240"/>
    <meta name="ICBM" content="27.7172;85.3240"/>
    
    <meta property="og:title" content="Nepal Digital Service - Your One-Stop Shop for Premium Social Media Services and Gaming Enhancements"/>
    <meta property="og:description" content="Explore a world of possibilities with our premium services! From gaming enhancements to social media boosts, we offer top-notch products for an enhanced digital experience. Unlock exclusive features, boost engagement, and elevate your online presence. Subscribe now!"/>
    <meta property="og:image" content="../assets/logo/logo.png"/>
    <meta property="og:url" content="https://www.ndsnepal.com/"/>
    
    <meta name="twitter:title" content="Premium Social Media Services and Gaming Enhancements"/>
    <meta name="twitter:description" content="Elevate your online presence with premium social media services and gaming enhancements. Subscribe now for exclusive features and top-notch digital experiences!"/>
    <meta name="twitter:image" content="../assets/logo/logo.png"/>
    
    <link rel="canonical" href="https://www.ndsnepal.com/"/>
    <link rel="sitemap" type="application/xml" href="../assets/logo/logo.png"/>
    
    
    <title>Nepal Digital Service -  Your Shop for Premium Services </title>
    </Helmet>
        {/* <Banner />  */}
        <HomeCategory />
        <CategoryShowCase />
    </div>
  )
}

export default Home
