// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useLocation } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";
import CircleSlider from "../components/CircleSlider";
// Page animation
import pageTransition from "../components/pageTransition";
// img
import heroVideo from "../assets/images/heroVideo2.mp4";
import tabArrow from "../assets/images/arrow.svg";
import modularIcon from '../assets/images/icons/wifi.svg'
import realTimeIcon from '../assets/images/icons/healthcare.svg'
import rdIcon from '../assets/images/icons/home-two.svg'
import ecoFriendlyIcon from '../assets/images/icons/leaf.svg'
import autoFlushIcon from '../assets/images/icons/recycling.svg'
import easyInstallIcon from '../assets/images/icons/thumbs-up.svg'
import customDesignIcon from '../assets/images/icons/toilet.svg'
import iotIcon from '../assets/images/icons/wheelchair.svg'
import data from '../assets/images/icons/data.svg'
// service img
import marketingServices from "../assets/images/services/digital-marketing-services.jpg";
import mobileApp from "../assets/images/services/mobileApp.jpg";
import cloudService from "../assets/images/services/cloudService.jpg";
import testAutomation from "../assets/images/services/testAutomation.jpg";
import uiDesign from "../assets/images/services/uiDesign.jpg";
import webDevelopment from "../assets/images/services/webDevelopment.jpg";
import softwareDevelopment from "../assets/images/services/softwareDevelopment.jpg";
import testingImg from "../assets/images/services/testingImg.jpg";
import developmentConsulting from "../assets/images/services/developmentConsulting.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// ============ Service Tab
const serviceTabs = [
  {
    title: "Smart Public Toilets",
    // img: image1, // Update with appropriate image for Smart Public Toilets
    discription:
      "Jaladhija designs and installs innovative, eco-friendly, and automated public toilets that provide a hygienic and convenient experience for users. Our smart solutions are tailored to meet the needs of urban spaces and public areas.",
  },
  {
    title: "Eco-Friendly Sanitation Solutions",
    // img: image2, // Update with appropriate image for Eco-Friendly Sanitation
    discription:
      "Our commitment to sustainability drives us to offer eco-friendly sanitation solutions that reduce water usage and ensure efficient waste management. Jaladhija’s solutions contribute to a cleaner environment.",
  },
  {
    title: "Modular Toilet Units for Events",
    // img: image3, // Update with appropriate image for Modular Units
    discription:
      "Jaladhija offers modular and portable toilet units that are ideal for large events, festivals, and public gatherings. These toilets provide a hygienic and comfortable solution for high-capacity venues.",
  },
  {
    title: "Smart Monitoring & Maintenance",
    // img: image4, // Update with appropriate image for Monitoring & Maintenance
    discription:
      "Our smart toilets come with real-time monitoring systems that track usage, maintenance needs, and cleaning schedules, ensuring that all units function optimally at all times.",
  },
  {
    title: "Sanitation for Educational Institutions",
    // img: image4, // Update with appropriate image for Educational Institutions
    discription:
      "We offer smart sanitation solutions tailored to educational institutions. Our systems ensure hygienic and low-maintenance toilet facilities for schools and universities, promoting better health for students and staff.",
  },
  {
    title: "Public Health & Safety",
    // img: image3, // Update with appropriate image for Public Health & Safety
    discription:
      "Our sanitation solutions are designed to promote public health and safety by ensuring clean and safe toilets in public spaces. We work closely with municipalities and government bodies to support urban health initiatives.",
  },
];

  const features = [
    {
      icon: easyInstallIcon,
      title: "Easy to Install",
    },
    {
      icon: customDesignIcon,
      title: "Custom Designing can be done",
    },
    {
      icon: ecoFriendlyIcon,
      title: "Eco-friendly designs",
    },
    {
      icon: autoFlushIcon,
      title: "Auto-flush and Floor Clean Technology",
    },
    {
      icon: iotIcon,
      title: "IoT Technology",
    },
    {
      icon: rdIcon,
      title: "R&D",
    },
    {
      icon: data,
      title: "Real-Time Data",
    },
    {
      icon: modularIcon,
      title: "Modular Design",
    },
  ];

const Home = () => {


  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [activeTab, setActiveTab] = useState(serviceTabs[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const counter = (minimum, maximum, setter, delay) => {
    for (let i = minimum; i <= maximum; i++) {
      setTimeout(() => {
        setter(i);
      }, i * delay);
    }
  };

  useEffect(() => {
    const delay = 5;
    const scrollThreshold = 600;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= scrollThreshold) {
        counter(0, 3, setCount, delay);
        counter(0, 87, setCount2, delay);
        counter(0, 782, setCount3, delay);
        counter(0, 100, setCount4, delay);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Produts Slider
  const pSliderRef = useRef(null);
  const psSettings = {
    dots: true,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Client Review Slider
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: false,
    vertical: true,
    centerMode: false,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const renderArrows = () => {
    const handlePrevClick = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };

    const handleNextClick = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };

    return (
      <div className="slider-arrow">
        <div className="sa_prevArrow" onClick={handlePrevClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <g clip-path="url(#clip0_208_349)">
              <path
                d="M0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5Z"
                fill="white"
              />
              <path
                d="M32.1241 21.408C32.6566 21.408 33.0883 21.8397 33.0883 22.3722C33.0883 22.9048 32.6566 23.3365 32.1241 23.3365V21.408ZM32.1241 23.3365H12.123V21.408H32.1241V23.3365Z"
                fill="#3D3D3D"
              />
              <path
                d="M18.8162 15.4285L11.8733 22.3713L18.8162 29.3142"
                stroke="#3D3D3D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <rect
              x="-1"
              y="1"
              width="43"
              height="43"
              rx="21.5"
              transform="matrix(-1 0 0 1 43 0)"
              stroke="#3D3D3D"
              stroke-width="2"
            />
            <defs>
              <clipPath id="clip0_208_349">
                <rect
                  width="45"
                  height="45"
                  rx="22.5"
                  transform="matrix(-1 0 0 1 45 0)"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="sa_nextArrow" onClick={handleNextClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <g clip-path="url(#clip0_208_353)">
              <path
                d="M45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45C34.9264 45 45 34.9264 45 22.5Z"
                fill="white"
              />
              <path
                d="M12.8759 21.408C12.3434 21.408 11.9117 21.8397 11.9117 22.3722C11.9117 22.9048 12.3434 23.3365 12.8759 23.3365V21.408ZM12.8759 23.3365H32.877V21.408H12.8759V23.3365Z"
                fill="#3D3D3D"
              />
              <path
                d="M26.1838 15.4285L33.1267 22.3713L26.1838 29.3142"
                stroke="#3D3D3D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <rect
              x="1"
              y="1"
              width="43"
              height="43"
              rx="21.5"
              stroke="#3D3D3D"
              stroke-width="2"
            />
            <defs>
              <clipPath id="clip0_208_353">
                <rect width="45" height="45" rx="22.5" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    );
  };
  const handleTabClick = (tab, index) => {
    setActiveTab(tab);
    setActiveIndex(index); // Set the index directly without finding it in the array
  };

  const getAnimationClass = (index) => {
    if (index === activeIndex) return "active";
    if (index > activeIndex) return "next";
    return "prev";
  };

  return (
    <>
    
      <section className="hero">
        <div className="video_wrapper">
          <video className="hero-video" muted autoPlay={"autoplay"} loop>
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="gg-container">
        
          <div className="hero_content">
            <h1 className="gg-title">
              
              "Jaldheja
              <br /> Smart Sanitation,
              <br /> Solutions Management"
            </h1>

            <Link to={"/contact-us"} className="gg-mainButton">
              Access Our Expertise Now!
            </Link>
          </div>
       
        </div>
        
      </section>

      {/* <section className="heo">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <video src={heroVideo}></video>
          </SwiperSlide>
          <SwiperSlide>
            <video src={heroVideo}></video>
          </SwiperSlide>
        </Swiper>
      </section> */}
      
      <section className="industries_wrapper">
        <div className="gg-container">
          <div className="gg-grid">
            <div className="gg-col-sm-5 gg-col-12">
              <AnimatedText>
                <div className="vw_heading">
                  <h5 className="sub__title">Industries We Serve</h5>
                  <h2 className="gg-title">
                    Discover the industries where Jaladhija's smart sanitation
                    solutions make a difference.
                  </h2>
                </div>
              </AnimatedText>
              {/* ./vw_heading */}
            </div>
            <div className="gg-col-sm-7 gg-col-12">
              <div className="circle_carousel">
                <div className="cc_gg">
                  <div className="cc_itemContent">
                    <CircleSlider />
                  </div>
                </div>
              </div>
              {/* ./circle_carousel */}
            </div>
          </div>
        </div>
      </section>


      <section className="icon_wrapper">
      <div className="feature-container">
        <h2 className="gg-title">Key Features and Functionalities</h2>
       <div className="icon-grid">
        <div className="icon-map">
        {features.map((feature, index) => (
            <div key={index} className="featureItem">
              <div className="featureCircle">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>
       </div>
      </div>
    </section>

      <section className="goals_wrapper">
        <div className="gg-container">
          <AnimatedText>
            <div className="gg-title">Goals</div>
          </AnimatedText>
        </div>
        {/* ./gg-container */}
        <div class="core">
          <AnimatedText>
            <svg
              width="1920"
              height="410"
              viewBox="0 0 1920 410"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_138_6040)">
                <path
                  d="M2.73894 121C2.73894 120.448 2.12581 120 1.36947 120C0.613134 120 0 120.448 0 121V359C0 359.552 0.613134 360 1.36947 360C2.12581 360 2.73894 359.552 2.73894 359V121Z"
                  fill="url(#paint0_linear_138_6040)"
                />
                <path
                  d="M30.1283 131C30.1283 130.448 29.5152 130 28.7589 130C28.0025 130 27.3894 130.448 27.3894 131V369C27.3894 369.552 28.0025 370 28.7589 370C29.5152 370 30.1283 369.552 30.1283 369V131Z"
                  fill="url(#paint1_linear_138_6040)"
                />
                <path
                  d="M57.5179 141C57.5179 140.448 56.9047 140 56.1484 140C55.3921 140 54.7789 140.448 54.7789 141V379C54.7789 379.552 55.3921 380 56.1484 380C56.9047 380 57.5179 379.552 57.5179 379V141Z"
                  fill="url(#paint2_linear_138_6040)"
                />
                <path
                  d="M84.9073 151C84.9073 150.448 84.2941 150 83.5378 150C82.7815 150 82.1683 150.448 82.1683 151V389C82.1683 389.552 82.7815 390 83.5378 390C84.2941 390 84.9073 389.552 84.9073 389V151Z"
                  fill="url(#paint3_linear_138_6040)"
                />
                <path
                  d="M112.297 161C112.297 160.448 111.684 160 110.927 160C110.171 160 109.558 160.448 109.558 161V399C109.558 399.552 110.171 400 110.927 400C111.684 400 112.297 399.552 112.297 399V161Z"
                  fill="url(#paint4_linear_138_6040)"
                />
                <path
                  d="M139.686 171C139.686 170.448 139.073 170 138.317 170C137.56 170 136.947 170.448 136.947 171V409C136.947 409.552 137.56 410 138.317 410C139.073 410 139.686 409.552 139.686 409V171Z"
                  fill="url(#paint5_linear_138_6040)"
                />
                <path
                  d="M167.076 181C167.076 180.448 166.462 180 165.706 180C164.95 180 164.337 180.448 164.337 181V419C164.337 419.552 164.95 420 165.706 420C166.462 420 167.076 419.552 167.076 419V181Z"
                  fill="url(#paint6_linear_138_6040)"
                />
                <path
                  d="M194.465 191C194.465 190.448 193.852 190 193.096 190C192.339 190 191.726 190.448 191.726 191V429C191.726 429.552 192.339 430 193.096 430C193.852 430 194.465 429.552 194.465 429V191Z"
                  fill="url(#paint7_linear_138_6040)"
                />
                <path
                  d="M221.854 201C221.854 200.448 221.241 200 220.485 200C219.729 200 219.115 200.448 219.115 201V439C219.115 439.552 219.729 440 220.485 440C221.241 440 221.854 439.552 221.854 439V201Z"
                  fill="url(#paint8_linear_138_6040)"
                />
                <path
                  d="M249.244 211C249.244 210.448 248.631 210 247.874 210C247.118 210 246.505 210.448 246.505 211V449C246.505 449.552 247.118 450 247.874 450C248.631 450 249.244 449.552 249.244 449V211Z"
                  fill="url(#paint9_linear_138_6040)"
                />
                <path
                  d="M276.633 221C276.633 220.448 276.02 220 275.264 220C274.508 220 273.894 220.448 273.894 221V459C273.894 459.552 274.508 460 275.264 460C276.02 460 276.633 459.552 276.633 459V221Z"
                  fill="url(#paint10_linear_138_6040)"
                />
                <path
                  d="M304.023 121C304.023 120.448 303.409 120 302.653 120C301.897 120 301.284 120.448 301.284 121V479C301.284 479.552 301.897 480 302.653 480C303.409 480 304.023 479.552 304.023 479V121Z"
                  fill="url(#paint11_linear_138_6040)"
                />
                <path
                  d="M331.412 221C331.412 220.448 330.799 220 330.043 220C329.286 220 328.673 220.448 328.673 221V459C328.673 459.552 329.286 460 330.043 460C330.799 460 331.412 459.552 331.412 459V221Z"
                  fill="url(#paint12_linear_138_6040)"
                />
                <path
                  d="M358.802 211C358.802 210.448 358.189 210 357.432 210C356.676 210 356.063 210.448 356.063 211V449C356.063 449.552 356.676 450 357.432 450C358.189 450 358.802 449.552 358.802 449V211Z"
                  fill="url(#paint13_linear_138_6040)"
                />
                <path
                  d="M386.191 201C386.191 200.448 385.578 200 384.822 200C384.065 200 383.452 200.448 383.452 201V439C383.452 439.552 384.065 440 384.822 440C385.578 440 386.191 439.552 386.191 439V201Z"
                  fill="url(#paint14_linear_138_6040)"
                />
                <path
                  d="M413.581 191C413.581 190.448 412.968 190 412.211 190C411.455 190 410.842 190.448 410.842 191V429C410.842 429.552 411.455 430 412.211 430C412.968 430 413.581 429.552 413.581 429V191Z"
                  fill="url(#paint15_linear_138_6040)"
                />
                <path
                  d="M440.97 181C440.97 180.448 440.357 180 439.6 180C438.844 180 438.231 180.448 438.231 181V419C438.231 419.552 438.844 420 439.6 420C440.357 420 440.97 419.552 440.97 419V181Z"
                  fill="url(#paint16_linear_138_6040)"
                />
                <path
                  d="M468.36 171C468.36 170.448 467.746 170 466.99 170C466.234 170 465.621 170.448 465.621 171V409C465.621 409.552 466.234 410 466.99 410C467.746 410 468.36 409.552 468.36 409V171Z"
                  fill="url(#paint17_linear_138_6040)"
                />
                <path
                  d="M495.749 161C495.749 160.448 495.136 160 494.379 160C493.623 160 493.01 160.448 493.01 161V399C493.01 399.552 493.623 400 494.379 400C495.136 400 495.749 399.552 495.749 399V161Z"
                  fill="url(#paint18_linear_138_6040)"
                />
                <path
                  d="M523.138 151C523.138 150.448 522.525 150 521.769 150C521.013 150 520.399 150.448 520.399 151V389C520.399 389.552 521.013 390 521.769 390C522.525 390 523.138 389.552 523.138 389V151Z"
                  fill="url(#paint19_linear_138_6040)"
                />
                <path
                  d="M550.528 141C550.528 140.448 549.915 140 549.158 140C548.402 140 547.789 140.448 547.789 141V379C547.789 379.552 548.402 380 549.158 380C549.915 380 550.528 379.552 550.528 379V141Z"
                  fill="url(#paint20_linear_138_6040)"
                />
                <path
                  d="M577.917 131C577.917 130.448 577.304 130 576.548 130C575.791 130 575.178 130.448 575.178 131V369C575.178 369.552 575.791 370 576.548 370C577.304 370 577.917 369.552 577.917 369V131Z"
                  fill="url(#paint21_linear_138_6040)"
                />
                <path
                  d="M605.307 121C605.307 120.448 604.694 120 603.937 120C603.181 120 602.568 120.448 602.568 121V359C602.568 359.552 603.181 360 603.937 360C604.694 360 605.307 359.552 605.307 359V121Z"
                  fill="url(#paint22_linear_138_6040)"
                />
                <path
                  d="M632.696 0.999992C632.696 0.447707 632.083 0 631.327 0C630.571 0 629.957 0.447715 629.957 1V359C629.957 359.552 630.571 360 631.327 360C632.083 360 632.696 359.552 632.696 359V0.999992Z"
                  fill="url(#paint23_linear_138_6040)"
                />
                <path
                  d="M660.086 121C660.086 120.448 659.472 120 658.716 120C657.96 120 657.347 120.448 657.347 121V359C657.347 359.552 657.96 360 658.716 360C659.472 360 660.086 359.552 660.086 359V121Z"
                  fill="url(#paint24_linear_138_6040)"
                />
                <path
                  d="M687.475 131C687.475 130.448 686.862 130 686.106 130C685.349 130 684.736 130.448 684.736 131V369C684.736 369.552 685.349 370 686.106 370C686.862 370 687.475 369.552 687.475 369V131Z"
                  fill="url(#paint25_linear_138_6040)"
                />
                <path
                  d="M714.864 141C714.864 140.448 714.251 140 713.495 140C712.739 140 712.125 140.448 712.125 141V379C712.125 379.552 712.739 380 713.495 380C714.251 380 714.864 379.552 714.864 379V141Z"
                  fill="url(#paint26_linear_138_6040)"
                />
                <path
                  d="M742.254 151C742.254 150.448 741.641 150 740.885 150C740.128 150 739.515 150.448 739.515 151V389C739.515 389.552 740.128 390 740.885 390C741.641 390 742.254 389.552 742.254 389V151Z"
                  fill="url(#paint27_linear_138_6040)"
                />
                <path
                  d="M769.643 161C769.643 160.448 769.03 160 768.274 160C767.517 160 766.904 160.448 766.904 161V399C766.904 399.552 767.517 400 768.274 400C769.03 400 769.643 399.552 769.643 399V161Z"
                  fill="url(#paint28_linear_138_6040)"
                />
                <path
                  d="M797.033 171C797.033 170.448 796.42 170 795.663 170C794.907 170 794.294 170.448 794.294 171V409C794.294 409.552 794.907 410 795.663 410C796.42 410 797.033 409.552 797.033 409V171Z"
                  fill="url(#paint29_linear_138_6040)"
                />
                <path
                  d="M824.422 181C824.422 180.448 823.809 180 823.053 180C822.296 180 821.683 180.448 821.683 181V419C821.683 419.552 822.296 420 823.053 420C823.809 420 824.422 419.552 824.422 419V181Z"
                  fill="url(#paint30_linear_138_6040)"
                />
                <path
                  d="M851.812 191C851.812 190.448 851.199 190 850.442 190C849.686 190 849.073 190.448 849.073 191V429C849.073 429.552 849.686 430 850.442 430C851.199 430 851.812 429.552 851.812 429V191Z"
                  fill="url(#paint31_linear_138_6040)"
                />
                <path
                  d="M879.201 201C879.201 200.448 878.588 200 877.832 200C877.075 200 876.462 200.448 876.462 201V439C876.462 439.552 877.075 440 877.832 440C878.588 440 879.201 439.552 879.201 439V201Z"
                  fill="url(#paint32_linear_138_6040)"
                />
                <path
                  d="M906.591 211C906.591 210.448 905.977 210 905.221 210C904.465 210 903.852 210.448 903.852 211V449C903.852 449.552 904.465 450 905.221 450C905.977 450 906.591 449.552 906.591 449V211Z"
                  fill="url(#paint33_linear_138_6040)"
                />
                <path
                  d="M933.98 221C933.98 220.448 933.367 220 932.611 220C931.854 220 931.241 220.448 931.241 221V459C931.241 459.552 931.854 460 932.611 460C933.367 460 933.98 459.552 933.98 459V221Z"
                  fill="url(#paint34_linear_138_6040)"
                />
                <path
                  d="M961.37 121C961.37 120.448 960.756 120 960 120C959.244 120 958.631 120.448 958.631 121V479C958.631 479.552 959.244 480 960 480C960.756 480 961.37 479.552 961.37 479V121Z"
                  fill="url(#paint35_linear_138_6040)"
                />
                <path
                  d="M988.759 221C988.759 220.448 988.146 220 987.389 220C986.633 220 986.02 220.448 986.02 221V459C986.02 459.552 986.633 460 987.389 460C988.146 460 988.759 459.552 988.759 459V221Z"
                  fill="url(#paint36_linear_138_6040)"
                />
                <path
                  d="M1016.15 211C1016.15 210.448 1015.54 210 1014.78 210C1014.02 210 1013.41 210.448 1013.41 211V449C1013.41 449.552 1014.02 450 1014.78 450C1015.54 450 1016.15 449.552 1016.15 449V211Z"
                  fill="url(#paint37_linear_138_6040)"
                />
                <path
                  d="M1043.54 201C1043.54 200.448 1042.92 200 1042.17 200C1041.41 200 1040.8 200.448 1040.8 201V439C1040.8 439.552 1041.41 440 1042.17 440C1042.92 440 1043.54 439.552 1043.54 439V201Z"
                  fill="url(#paint38_linear_138_6040)"
                />
                <path
                  d="M1070.93 191C1070.93 190.448 1070.31 190 1069.56 190C1068.8 190 1068.19 190.448 1068.19 191V429C1068.19 429.552 1068.8 430 1069.56 430C1070.31 430 1070.93 429.552 1070.93 429V191Z"
                  fill="url(#paint39_linear_138_6040)"
                />
                <path
                  d="M1098.32 181C1098.32 180.448 1097.7 180 1096.95 180C1096.19 180 1095.58 180.448 1095.58 181V419C1095.58 419.552 1096.19 420 1096.95 420C1097.7 420 1098.32 419.552 1098.32 419V181Z"
                  fill="url(#paint40_linear_138_6040)"
                />
                <path
                  d="M1125.71 171C1125.71 170.448 1125.09 170 1124.34 170C1123.58 170 1122.97 170.448 1122.97 171V409C1122.97 409.552 1123.58 410 1124.34 410C1125.09 410 1125.71 409.552 1125.71 409V171Z"
                  fill="url(#paint41_linear_138_6040)"
                />
                <path
                  d="M1153.1 161C1153.1 160.448 1152.48 160 1151.73 160C1150.97 160 1150.36 160.448 1150.36 161V399C1150.36 399.552 1150.97 400 1151.73 400C1152.48 400 1153.1 399.552 1153.1 399V161Z"
                  fill="url(#paint42_linear_138_6040)"
                />
                <path
                  d="M1180.49 151C1180.49 150.448 1179.87 150 1179.12 150C1178.36 150 1177.75 150.448 1177.75 151V389C1177.75 389.552 1178.36 390 1179.12 390C1179.87 390 1180.49 389.552 1180.49 389V151Z"
                  fill="url(#paint43_linear_138_6040)"
                />
                <path
                  d="M1207.87 141C1207.87 140.448 1207.26 140 1206.51 140C1205.75 140 1205.14 140.448 1205.14 141V379C1205.14 379.552 1205.75 380 1206.51 380C1207.26 380 1207.87 379.552 1207.87 379V141Z"
                  fill="url(#paint44_linear_138_6040)"
                />
                <path
                  d="M1235.26 131C1235.26 130.448 1234.65 130 1233.89 130C1233.14 130 1232.52 130.448 1232.52 131V369C1232.52 369.552 1233.14 370 1233.89 370C1234.65 370 1235.26 369.552 1235.26 369V131Z"
                  fill="url(#paint45_linear_138_6040)"
                />
                <path
                  d="M1262.65 121C1262.65 120.448 1262.04 120 1261.28 120C1260.53 120 1259.91 120.448 1259.91 121V359C1259.91 359.552 1260.53 360 1261.28 360C1262.04 360 1262.65 359.552 1262.65 359V121Z"
                  fill="url(#paint46_linear_138_6040)"
                />
                <path
                  d="M1290.04 0.999992C1290.04 0.447707 1289.43 0 1288.67 0C1287.92 0 1287.3 0.447715 1287.3 1V359C1287.3 359.552 1287.92 360 1288.67 360C1289.43 360 1290.04 359.552 1290.04 359V0.999992Z"
                  fill="url(#paint47_linear_138_6040)"
                />
                <path
                  d="M1317.43 121C1317.43 120.448 1316.82 120 1316.06 120C1315.31 120 1314.69 120.448 1314.69 121V359C1314.69 359.552 1315.31 360 1316.06 360C1316.82 360 1317.43 359.552 1317.43 359V121Z"
                  fill="url(#paint48_linear_138_6040)"
                />
                <path
                  d="M1344.82 131C1344.82 130.448 1344.21 130 1343.45 130C1342.7 130 1342.08 130.448 1342.08 131V369C1342.08 369.552 1342.7 370 1343.45 370C1344.21 370 1344.82 369.552 1344.82 369V131Z"
                  fill="url(#paint49_linear_138_6040)"
                />
                <path
                  d="M1372.21 141C1372.21 140.448 1371.6 140 1370.84 140C1370.09 140 1369.47 140.448 1369.47 141V379C1369.47 379.552 1370.09 380 1370.84 380C1371.6 380 1372.21 379.552 1372.21 379V141Z"
                  fill="url(#paint50_linear_138_6040)"
                />
                <path
                  d="M1399.6 151C1399.6 150.448 1398.99 150 1398.23 150C1397.47 150 1396.86 150.448 1396.86 151V389C1396.86 389.552 1397.47 390 1398.23 390C1398.99 390 1399.6 389.552 1399.6 389V151Z"
                  fill="url(#paint51_linear_138_6040)"
                />
                <path
                  d="M1426.99 161C1426.99 160.448 1426.38 160 1425.62 160C1424.86 160 1424.25 160.448 1424.25 161V399C1424.25 399.552 1424.86 400 1425.62 400C1426.38 400 1426.99 399.552 1426.99 399V161Z"
                  fill="url(#paint52_linear_138_6040)"
                />
                <path
                  d="M1454.38 171C1454.38 170.448 1453.77 170 1453.01 170C1452.25 170 1451.64 170.448 1451.64 171V409C1451.64 409.552 1452.25 410 1453.01 410C1453.77 410 1454.38 409.552 1454.38 409V171Z"
                  fill="url(#paint53_linear_138_6040)"
                />
                <path
                  d="M1481.77 181C1481.77 180.448 1481.16 180 1480.4 180C1479.64 180 1479.03 180.448 1479.03 181V419C1479.03 419.552 1479.64 420 1480.4 420C1481.16 420 1481.77 419.552 1481.77 419V181Z"
                  fill="url(#paint54_linear_138_6040)"
                />
                <path
                  d="M1509.16 191C1509.16 190.448 1508.55 190 1507.79 190C1507.03 190 1506.42 190.448 1506.42 191V429C1506.42 429.552 1507.03 430 1507.79 430C1508.55 430 1509.16 429.552 1509.16 429V191Z"
                  fill="url(#paint55_linear_138_6040)"
                />
                <path
                  d="M1536.55 201C1536.55 200.448 1535.93 200 1535.18 200C1534.42 200 1533.81 200.448 1533.81 201V439C1533.81 439.552 1534.42 440 1535.18 440C1535.93 440 1536.55 439.552 1536.55 439V201Z"
                  fill="url(#paint56_linear_138_6040)"
                />
                <path
                  d="M1563.94 211C1563.94 210.448 1563.32 210 1562.57 210C1561.81 210 1561.2 210.448 1561.2 211V449C1561.2 449.552 1561.81 450 1562.57 450C1563.32 450 1563.94 449.552 1563.94 449V211Z"
                  fill="url(#paint57_linear_138_6040)"
                />
                <path
                  d="M1591.33 221C1591.33 220.448 1590.71 220 1589.96 220C1589.2 220 1588.59 220.448 1588.59 221V459C1588.59 459.552 1589.2 460 1589.96 460C1590.71 460 1591.33 459.552 1591.33 459V221Z"
                  fill="url(#paint58_linear_138_6040)"
                />
                <path
                  d="M1618.72 121C1618.72 120.448 1618.1 120 1617.35 120C1616.59 120 1615.98 120.448 1615.98 121V479C1615.98 479.552 1616.59 480 1617.35 480C1618.1 480 1618.72 479.552 1618.72 479V121Z"
                  fill="url(#paint59_linear_138_6040)"
                />
                <path
                  d="M1646.11 221C1646.11 220.448 1645.49 220 1644.74 220C1643.98 220 1643.37 220.448 1643.37 221V459C1643.37 459.552 1643.98 460 1644.74 460C1645.49 460 1646.11 459.552 1646.11 459V221Z"
                  fill="url(#paint60_linear_138_6040)"
                />
                <path
                  d="M1673.49 211C1673.49 210.448 1672.88 210 1672.13 210C1671.37 210 1670.76 210.448 1670.76 211V449C1670.76 449.552 1671.37 450 1672.13 450C1672.88 450 1673.49 449.552 1673.49 449V211Z"
                  fill="url(#paint61_linear_138_6040)"
                />
                <path
                  d="M1700.88 201C1700.88 200.448 1700.27 200 1699.51 200C1698.76 200 1698.15 200.448 1698.15 201V439C1698.15 439.552 1698.76 440 1699.51 440C1700.27 440 1700.88 439.552 1700.88 439V201Z"
                  fill="url(#paint62_linear_138_6040)"
                />
                <path
                  d="M1728.27 191C1728.27 190.448 1727.66 190 1726.9 190C1726.15 190 1725.54 190.448 1725.54 191V429C1725.54 429.552 1726.15 430 1726.9 430C1727.66 430 1728.27 429.552 1728.27 429V191Z"
                  fill="url(#paint63_linear_138_6040)"
                />
                <path
                  d="M1755.66 181C1755.66 180.448 1755.05 180 1754.29 180C1753.54 180 1752.92 180.448 1752.92 181V419C1752.92 419.552 1753.54 420 1754.29 420C1755.05 420 1755.66 419.552 1755.66 419V181Z"
                  fill="url(#paint64_linear_138_6040)"
                />
                <path
                  d="M1783.05 171C1783.05 170.448 1782.44 170 1781.68 170C1780.93 170 1780.31 170.448 1780.31 171V409C1780.31 409.552 1780.93 410 1781.68 410C1782.44 410 1783.05 409.552 1783.05 409V171Z"
                  fill="url(#paint65_linear_138_6040)"
                />
                <path
                  d="M1810.44 161C1810.44 160.448 1809.83 160 1809.07 160C1808.32 160 1807.7 160.448 1807.7 161V399C1807.7 399.552 1808.32 400 1809.07 400C1809.83 400 1810.44 399.552 1810.44 399V161Z"
                  fill="url(#paint66_linear_138_6040)"
                />
                <path
                  d="M1837.83 151C1837.83 150.448 1837.22 150 1836.46 150C1835.71 150 1835.09 150.448 1835.09 151V389C1835.09 389.552 1835.71 390 1836.46 390C1837.22 390 1837.83 389.552 1837.83 389V151Z"
                  fill="url(#paint67_linear_138_6040)"
                />
                <path
                  d="M1865.22 141C1865.22 140.448 1864.61 140 1863.85 140C1863.1 140 1862.48 140.448 1862.48 141V379C1862.48 379.552 1863.1 380 1863.85 380C1864.61 380 1865.22 379.552 1865.22 379V141Z"
                  fill="url(#paint68_linear_138_6040)"
                />
                <path
                  d="M1892.61 131C1892.61 130.448 1892 130 1891.24 130C1890.48 130 1889.87 130.448 1889.87 131V369C1889.87 369.552 1890.48 370 1891.24 370C1892 370 1892.61 369.552 1892.61 369V131Z"
                  fill="url(#paint69_linear_138_6040)"
                />
                <path
                  d="M1920 121C1920 120.448 1919.39 120 1918.63 120C1917.87 120 1917.26 120.448 1917.26 121V359C1917.26 359.552 1917.87 360 1918.63 360C1919.39 360 1920 359.552 1920 359V121Z"
                  fill="url(#paint70_linear_138_6040)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_138_6040"
                  x1="0"
                  y1="120"
                  x2="0"
                  y2="360"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_138_6040"
                  x1="27.3894"
                  y1="130"
                  x2="27.3894"
                  y2="370"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_138_6040"
                  x1="54.7789"
                  y1="140"
                  x2="54.7789"
                  y2="380"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_138_6040"
                  x1="82.1683"
                  y1="150"
                  x2="82.1683"
                  y2="390"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_138_6040"
                  x1="109.558"
                  y1="160"
                  x2="109.558"
                  y2="400"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_138_6040"
                  x1="136.947"
                  y1="170"
                  x2="136.947"
                  y2="410"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_138_6040"
                  x1="164.337"
                  y1="180"
                  x2="164.337"
                  y2="420"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_138_6040"
                  x1="191.726"
                  y1="190"
                  x2="191.726"
                  y2="430"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_138_6040"
                  x1="219.115"
                  y1="200"
                  x2="219.115"
                  y2="440"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_138_6040"
                  x1="246.505"
                  y1="210"
                  x2="246.505"
                  y2="450"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_138_6040"
                  x1="273.894"
                  y1="220"
                  x2="273.894"
                  y2="460"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_138_6040"
                  x1="301.284"
                  y1="120"
                  x2="301.284"
                  y2="480"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_138_6040"
                  x1="328.673"
                  y1="220"
                  x2="328.673"
                  y2="460"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint13_linear_138_6040"
                  x1="356.063"
                  y1="210"
                  x2="356.063"
                  y2="450"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint14_linear_138_6040"
                  x1="383.452"
                  y1="200"
                  x2="383.452"
                  y2="440"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint15_linear_138_6040"
                  x1="410.842"
                  y1="190"
                  x2="410.842"
                  y2="430"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint16_linear_138_6040"
                  x1="438.231"
                  y1="180"
                  x2="438.231"
                  y2="420"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint17_linear_138_6040"
                  x1="465.621"
                  y1="170"
                  x2="465.621"
                  y2="410"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint18_linear_138_6040"
                  x1="493.01"
                  y1="160"
                  x2="493.01"
                  y2="400"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint19_linear_138_6040"
                  x1="520.399"
                  y1="150"
                  x2="520.399"
                  y2="390"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint20_linear_138_6040"
                  x1="547.789"
                  y1="140"
                  x2="547.789"
                  y2="380"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint21_linear_138_6040"
                  x1="575.178"
                  y1="130"
                  x2="575.178"
                  y2="370"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint22_linear_138_6040"
                  x1="602.568"
                  y1="120"
                  x2="602.568"
                  y2="360"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint23_linear_138_6040"
                  x1="629.957"
                  y1="0"
                  x2="629.957"
                  y2="360"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint24_linear_138_6040"
                  x1="657.347"
                  y1="120"
                  x2="657.347"
                  y2="360"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint25_linear_138_6040"
                  x1="684.736"
                  y1="130"
                  x2="684.736"
                  y2="370"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint26_linear_138_6040"
                  x1="712.125"
                  y1="140"
                  x2="712.125"
                  y2="380"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint27_linear_138_6040"
                  x1="739.515"
                  y1="150"
                  x2="739.515"
                  y2="390"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint28_linear_138_6040"
                  x1="766.904"
                  y1="160"
                  x2="766.904"
                  y2="400"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint29_linear_138_6040"
                  x1="794.294"
                  y1="170"
                  x2="794.294"
                  y2="410"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint30_linear_138_6040"
                  x1="821.683"
                  y1="180"
                  x2="821.683"
                  y2="420"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint31_linear_138_6040"
                  x1="849.073"
                  y1="190"
                  x2="849.073"
                  y2="430"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint32_linear_138_6040"
                  x1="876.462"
                  y1="200"
                  x2="876.462"
                  y2="440"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint33_linear_138_6040"
                  x1="903.852"
                  y1="210"
                  x2="903.852"
                  y2="450"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint34_linear_138_6040"
                  x1="931.241"
                  y1="220"
                  x2="931.241"
                  y2="460"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint35_linear_138_6040"
                  x1="958.631"
                  y1="120"
                  x2="958.631"
                  y2="480"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint36_linear_138_6040"
                  x1="986.02"
                  y1="220"
                  x2="986.02"
                  y2="460"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint37_linear_138_6040"
                  x1="1013.41"
                  y1="210"
                  x2="1013.41"
                  y2="450"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint38_linear_138_6040"
                  x1="1040.8"
                  y1="200"
                  x2="1040.8"
                  y2="440"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint39_linear_138_6040"
                  x1="1068.19"
                  y1="190"
                  x2="1068.19"
                  y2="430"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint40_linear_138_6040"
                  x1="1095.58"
                  y1="180"
                  x2="1095.58"
                  y2="420"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint41_linear_138_6040"
                  x1="1122.97"
                  y1="170"
                  x2="1122.97"
                  y2="410"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint42_linear_138_6040"
                  x1="1150.36"
                  y1="160"
                  x2="1150.36"
                  y2="400"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint43_linear_138_6040"
                  x1="1177.75"
                  y1="150"
                  x2="1177.75"
                  y2="390"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint44_linear_138_6040"
                  x1="1205.14"
                  y1="140"
                  x2="1205.14"
                  y2="380"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint45_linear_138_6040"
                  x1="1232.52"
                  y1="130"
                  x2="1232.52"
                  y2="370"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint46_linear_138_6040"
                  x1="1259.91"
                  y1="120"
                  x2="1259.91"
                  y2="360"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint47_linear_138_6040"
                  x1="1287.3"
                  y1="0"
                  x2="1287.3"
                  y2="360"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint48_linear_138_6040"
                  x1="1314.69"
                  y1="120"
                  x2="1314.69"
                  y2="360"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint49_linear_138_6040"
                  x1="1342.08"
                  y1="130"
                  x2="1342.08"
                  y2="370"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint50_linear_138_6040"
                  x1="1369.47"
                  y1="140"
                  x2="1369.47"
                  y2="380"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint51_linear_138_6040"
                  x1="1396.86"
                  y1="150"
                  x2="1396.86"
                  y2="390"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint52_linear_138_6040"
                  x1="1424.25"
                  y1="160"
                  x2="1424.25"
                  y2="400"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint53_linear_138_6040"
                  x1="1451.64"
                  y1="170"
                  x2="1451.64"
                  y2="410"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint54_linear_138_6040"
                  x1="1479.03"
                  y1="180"
                  x2="1479.03"
                  y2="420"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint55_linear_138_6040"
                  x1="1506.42"
                  y1="190"
                  x2="1506.42"
                  y2="430"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint56_linear_138_6040"
                  x1="1533.81"
                  y1="200"
                  x2="1533.81"
                  y2="440"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint57_linear_138_6040"
                  x1="1561.2"
                  y1="210"
                  x2="1561.2"
                  y2="450"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint58_linear_138_6040"
                  x1="1588.59"
                  y1="220"
                  x2="1588.59"
                  y2="460"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint59_linear_138_6040"
                  x1="1615.98"
                  y1="120"
                  x2="1615.98"
                  y2="480"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint60_linear_138_6040"
                  x1="1643.37"
                  y1="220"
                  x2="1643.37"
                  y2="460"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint61_linear_138_6040"
                  x1="1670.76"
                  y1="210"
                  x2="1670.76"
                  y2="450"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint62_linear_138_6040"
                  x1="1698.15"
                  y1="200"
                  x2="1698.15"
                  y2="440"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint63_linear_138_6040"
                  x1="1725.54"
                  y1="190"
                  x2="1725.54"
                  y2="430"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint64_linear_138_6040"
                  x1="1752.92"
                  y1="180"
                  x2="1752.92"
                  y2="420"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint65_linear_138_6040"
                  x1="1780.31"
                  y1="170"
                  x2="1780.31"
                  y2="410"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint66_linear_138_6040"
                  x1="1807.7"
                  y1="160"
                  x2="1807.7"
                  y2="400"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint67_linear_138_6040"
                  x1="1835.09"
                  y1="150"
                  x2="1835.09"
                  y2="390"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint68_linear_138_6040"
                  x1="1862.48"
                  y1="140"
                  x2="1862.48"
                  y2="380"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint69_linear_138_6040"
                  x1="1889.87"
                  y1="130"
                  x2="1889.87"
                  y2="370"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint70_linear_138_6040"
                  x1="1917.26"
                  y1="120"
                  x2="1917.26"
                  y2="360"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CADDFA" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <clipPath id="clip0_138_6040">
                  <rect width="1920" height="410" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </AnimatedText>

          <div class="core_text ct1">Diversify Lead Sources</div>
          <div class="core_text ct2">Technological Excellence in Sanitation</div>
          <div class="core_text ct3">Inclusive Sanitation Solutions for Specially-Abled Users</div>
          <div class="core_text ct4">Exceptional Hygiene & Sanitation Experiences</div>
          <div class="core_text ct5">Great User Experiences for All</div>

        </div>
        {/*  ./core */}
      </section>

      {/* <section className="ourProucts_wrapper">
        <div className="vw_heading">
          <AnimatedText>
            <h5 className="sub__title">Our Products</h5>
            <h2 className="gg-title">
              Experience Excellence: Introducing Our Latest Products
            </h2>
          </AnimatedText>
        </div>

      </section> */}

      <section className="clientReview_wrapper">
        <div className="gg-container">
          <div className="gg-grid">
            <div className="gg-col-sm-6 gg-col-12">
              <Slider ref={sliderRef} {...settings}>
                <div className="crw_block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="28"
                    viewBox="0 0 35 28"
                    fill="none"
                  >
                    <path
                      d="M14.0236 14.0406V27.7358H0V18.4138C0 14.8845 0.628507 11.6621 1.88552 8.74657C3.14254 5.75432 5.22447 2.8388 8.13131 0L13.3165 3.91294C10.0168 7.44226 8.13131 10.8181 7.65993 14.0406H14.0236ZM35 14.0406V27.7358H20.9764V18.4138C20.9764 14.8845 21.6049 11.6621 22.862 8.74657C24.119 5.75432 26.2009 2.8388 29.1077 0L34.2929 3.91294C30.9933 7.44226 29.1077 10.8181 28.6364 14.0406H35Z"
                      fill="#6C2BD9"
                    />
                  </svg>
                  <p>
                    Jaladhija's smart toilet solutions have revolutionized sanitation in
                    public spaces. Their focus on technology and user-centered design
                    made our public facilities more efficient and accessible.
                  </p>
                  <div className="crw_name">Ayesha Khan, Facility Manager</div>
                  <div className="industry">Public Sanitation Sector</div>
                </div>

                <div className="crw_block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="28"
                    viewBox="0 0 35 28"
                    fill="none"
                  >
                    <path
                      d="M14.0236 14.0406V27.7358H0V18.4138C0 14.8845 0.628507 11.6621 1.88552 8.74657C3.14254 5.75432 5.22447 2.8388 8.13131 0L13.3165 3.91294C10.0168 7.44226 8.13131 10.8181 7.65993 14.0406H14.0236ZM35 14.0406V27.7358H20.9764V18.4138C20.9764 14.8845 21.6049 11.6621 22.862 8.74657C24.119 5.75432 26.2009 2.8388 29.1077 0L34.2929 3.91294C30.9933 7.44226 29.1077 10.8181 28.6364 14.0406H35Z"
                      fill="#6C2BD9"
                    />
                  </svg>
                  <p>
                    Their team’s commitment to sustainability through smart toilets
                    has made a noticeable difference in our urban areas. We have seen
                    better hygiene standards and greater accessibility for everyone,
                    especially for those with special needs.
                  </p>
                  <div className="crw_name">Rajesh Gupta, Urban Planner</div>
                  <div className="industry">Urban Development Sector</div>
                </div>

                <div className="crw_block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="28"
                    viewBox="0 0 35 28"
                    fill="none"
                  >
                    <path
                      d="M14.0236 14.0406V27.7358H0V18.4138C0 14.8845 0.628507 11.6621 1.88552 8.74657C3.14254 5.75432 5.22447 2.8388 8.13131 0L13.3165 3.91294C10.0168 7.44226 8.13131 10.8181 7.65993 14.0406H14.0236ZM35 14.0406V27.7358H20.9764V18.4138C20.9764 14.8845 21.6049 11.6621 22.862 8.74657C24.119 5.75432 26.2009 2.8388 29.1077 0L34.2929 3.91294C30.9933 7.44226 29.1077 10.8181 28.6364 14.0406H35Z"
                      fill="#6C2BD9"
                    />
                  </svg>
                  <p>
                    We implemented Jaladhija’s smart toilets at several public parks
                    and have been thrilled by the results. Their advanced tech has
                    made a significant difference in convenience and cleanliness.
                  </p>
                  <div className="crw_name">Liam Patterson, Park Manager</div>
                  <div className="industry">Public Parks & Recreation</div>
                </div>

                <div className="crw_block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="28"
                    viewBox="0 0 35 28"
                    fill="none"
                  >
                    <path
                      d="M14.0236 14.0406V27.7358H0V18.4138C0 14.8845 0.628507 11.6621 1.88552 8.74657C3.14254 5.75432 5.22447 2.8388 8.13131 0L13.3165 3.91294C10.0168 7.44226 8.13131 10.8181 7.65993 14.0406H14.0236ZM35 14.0406V27.7358H20.9764V18.4138C20.9764 14.8845 21.6049 11.6621 22.862 8.74657C24.119 5.75432 26.2009 2.8388 29.1077 0L34.2929 3.91294C30.9933 7.44226 29.1077 10.8181 28.6364 14.0406H35Z"
                      fill="#6C2BD9"
                    />
                  </svg>
                  <p>
                    Jaladhija’s innovative solutions in public sanitation have been a
                    game-changer for our community. Their toilets are not just
                    environmentally friendly but also accessible to all citizens,
                    including those with disabilities.
                  </p>
                  <div className="crw_name">Mina Loper, Community Outreach Director</div>
                  <div className="industry">Community Services</div>
                </div>
              </Slider>
            </div>
            <div className="gg-col-sm-6 gg-col-12">
              <AnimatedText>
                <div className="vw_heading">
                  <h5 className="sub__title">Testimonials</h5>
                  <h2 className="gg-title">
                    Our customers <br /> love what we do
                  </h2>
                  <p>
                    Curious about the impact we've had on businesses like yours?
                    Delve into the client testimonial section at Jaladhija. It's a
                    compelling feedback of partnerships, growth, and satisfaction,
                    told directly by the clients who have experienced the positive
                    changes our smart sanitation solutions have brought to their
                    organisations.
                  </p>
                  {renderArrows()}
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
        <div className="pattern__bottom"></div>
      </section>


      <section className="career_wrapper">
        <div className="gg-container">
          <AnimatedText>
            <div className="vw_heading">
              <h5 className="sub__title">Career Opportunities</h5>
              <h2 className="gg-title">Be Part of Our Innovative Journey</h2>
              <p>
                At Jaladhija, we're driven by a passion for transforming public sanitation through innovation. We're looking for proactive individuals who bring fresh ideas, adaptability, and a commitment to improving communities. If you're excited about making a real difference and are ready to join a forward-thinking team, we’d love to hear from you!
              </p>
              <Link to={"/about-us"} className="gg-mainButton">
                Explore Now
              </Link>
            </div>
            {/* ./vw_heading */}
          </AnimatedText>
        </div>
        {/* ./gg-container */}
      </section>

    </>
  );
};

export default Home;
