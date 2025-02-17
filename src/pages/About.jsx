// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// img

import AnimatedText from '../components/AnimatedText';
import visionImg from "../assets/images/download.jpeg";

// Page animation
import pageTransition from '../components/pageTransition';

const About = () =>{

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
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
            <g clip-path="url(#clip0_208_349)">
              <path d="M0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5Z" fill="white" />
              <path d="M32.1241 21.408C32.6566 21.408 33.0883 21.8397 33.0883 22.3722C33.0883 22.9048 32.6566 23.3365 32.1241 23.3365V21.408ZM32.1241 23.3365H12.123V21.408H32.1241V23.3365Z" fill="#3D3D3D" />
              <path d="M18.8162 15.4285L11.8733 22.3713L18.8162 29.3142" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <rect x="-1" y="1" width="43" height="43" rx="21.5" transform="matrix(-1 0 0 1 43 0)" stroke="#3D3D3D" stroke-width="2" />
            <defs>
              <clipPath id="clip0_208_349">
                <rect width="45" height="45" rx="22.5" transform="matrix(-1 0 0 1 45 0)" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="sa_nextArrow" onClick={handleNextClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
            <g clip-path="url(#clip0_208_353)">
              <path d="M45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45C34.9264 45 45 34.9264 45 22.5Z" fill="white" />
              <path d="M12.8759 21.408C12.3434 21.408 11.9117 21.8397 11.9117 22.3722C11.9117 22.9048 12.3434 23.3365 12.8759 23.3365V21.408ZM12.8759 23.3365H32.877V21.408H12.8759V23.3365Z" fill="#3D3D3D" />
              <path d="M26.1838 15.4285L33.1267 22.3713L26.1838 29.3142" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <rect x="1" y="1" width="43" height="43" rx="21.5" stroke="#3D3D3D" stroke-width="2" />
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

  return (
    <>
      <section className="gg-page_banner">
        <div className="gg-container">
          <div className="gab_content">
            <h4 className="sub__title">About us</h4>
            <h1 className="gg-title">"Transforming Public Hygiene <br/> with Smart, Sustainable Solutions"</h1>
          </div>
          {/* ./gab_content */}
        </div>
        {/* ./gg-container */}
      </section>

      <section className="vision_wrapper">
  <div className="gg-container">
    <div className="gg-grid">
      <div className="gg-col-sm-6 gg-col-12">
        <AnimatedText>
          <div className="vw_heading">
            <h4 className="sub__title">Our Vision</h4>
            <h2 className="gg-title">A Cleaner Tomorrow, Today</h2>
            <p>At Jaldheja, our vision is to create smart and sustainable public toilets that elevate hygiene standards while ensuring convenience and safety for all. We aim to revolutionize sanitation through innovative technology, making clean and smart public toilets accessible for everyone. With a passionate and skilled team, we are committed to delivering efficient solutions that improve public spaces and enhance quality of life.</p>
          </div>
        </AnimatedText>
        {/* ./vw_heading */}
      </div>
      <div className="gg-col-sm-6 gg-col-12">
        <img src={visionImg} alt="vision image" />
      </div>
    </div>
    {/* .gg-grid */}
  </div>
  {/* ./container */}
</section>


<section className="whyChoose_wrapper">
  <AnimatedText>
    <div className="vw_heading">
      <h4 className="sub__title">Why Choose Us</h4>
      <h2 className="gg-title">Our Unique Approach to Smarter Sanitation</h2>
    </div>
  </AnimatedText>
  {/* ./vw_heading */}
  <div className="wc_grid">
    <div className="wc_item">
      <h3>Innovative Sanitation Solutions</h3>
      <p>We specialize in designing and deploying smart public toilets that integrate the latest technology for a cleaner and more efficient experience.</p>
      <div className="shapeIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="350" height="351" viewBox="0 0 350 351" fill="none">
          <path d="M87.4999 88.5959H88.0254V88.0704V1.09595H261.974V88.0704V88.5959H262.5H349.474V262.545H262.5H261.974V263.07V350.045H88.0254V263.07V262.545H87.4999H0.525391V88.5959H87.4999Z" stroke="#D5D5D5" />
        </svg>
      </div>
    </div>
    {/* ./wc_item */}
    <div className="wc_item">
      <h3>Smart and Sustainable Design</h3>
      <p>Our toilets are designed with sustainability at their core, using eco-friendly materials and efficient technology to reduce environmental impact.</p>
      <div className="shapeIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" viewBox="0 0 350 350" fill="none">
          <path d="M1.26123 174.57L175 0.831543L348.739 174.57L175 348.309L1.26123 174.57Z" stroke="#D5D5D5" />
        </svg>
      </div>
    </div>
    {/* ./wc_item */}
    <div className="wc_item">
      <h3>Hygiene and Safety First</h3>
      <p>We prioritize hygiene and safety by incorporating advanced sanitation technology to ensure clean and safe experiences for every user.</p>
      <div className="shapeIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" viewBox="0 0 350 350" fill="none">
          <path d="M247.056 348.526H102.947L1.04492 246.623V102.517L102.947 0.615112H247.056L348.955 102.514V246.626L247.056 348.526Z" stroke="#D5D5D5" />
        </svg>
      </div>
    </div>
    {/* ./wc_item */}
    <div className="wc_item">
      <h3>Reliable Customer Support</h3>
      <p>Our team is always ready to assist you, providing prompt and reliable support for any needs related to our smart public toilet solutions.</p>
      <div className="shapeIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="350" height="351" viewBox="0 0 350 351" fill="none">
          <path d="M319.603 175.198L319.231 175.57L319.603 175.943C359.431 215.77 359.431 280.345 319.603 320.174C279.775 360.001 215.199 360.001 175.372 320.174L175 319.802L174.628 320.174C134.8 360.001 70.2252 360.001 30.3967 320.174C-9.4317 280.345 -9.43172 215.77 30.3967 175.943L30.7683 175.57L30.3967 175.198C-9.4317 135.371 -9.4317 70.7958 30.3967 30.9672C70.2252 -8.86114 134.8 -8.86116 174.628 30.9672L175 31.3389L175.372 30.9672C215.199 -8.86115 279.775 -8.86114 319.603 30.9672C359.431 70.7958 359.431 135.371 319.603 175.198Z" stroke="#D5D5D5" />
        </svg>
      </div>
    </div>
    {/* ./wc_item */}
  </div>
  {/* ./wc_grid */}
</section>


<section className="whoWeAre_wrapper">
  <div className="gg-container">
    <div className="wa_content">
      <AnimatedText>
        <h2 className="gg-title">Who We Are?</h2>
        <p>We are pioneers in the smart sanitation industry, committed to revolutionizing public restroom experiences through innovative design and cutting-edge technology. At **[Company Name]**, our dedicated team of experts works tirelessly to craft user-friendly, sustainable, and hygienic solutions tailored to the needs of modern society. With over 3+ years of experience, we are proud to lead the way in providing smarter, safer, and more eco-conscious sanitation solutions for public spaces worldwide.</p>
      </AnimatedText>
    </div>
    {/* ./wa_content */}
  </div>
</section>


<section className="values_wrapper">
  <div className="gg-container">
    <AnimatedText>
      <div className="vw_heading">
        <h4 className="sub__title">Our Values</h4>
        <h2 className="gg-title">Guiding Principles</h2>
        <p>These are the reasons why we believe we are the best partner for your next project:</p>
      </div>
    </AnimatedText>
    {/* ./vw_heading */}
    <div className="wc_grid">
      <div className="wc_item">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5024 3.22713C19.4066 2.88995 24.1468 2.71313 30.0107 2.71313C31.9461 2.71313 33.7601 2.73239 35.499 2.7704C37.6571 2.81755 39.7721 3.53354 41.5075 4.87287C46.6335 8.82907 49.7732 12.1713 53.6462 17.4476C54.9006 19.1564 55.5808 21.2058 55.6339 23.303C55.6944 25.699 55.7248 28.1228 55.7248 30.5703C55.7248 36.6132 55.5371 42.5121 55.1796 48.2069C54.8531 53.4153 50.7174 57.5562 45.5188 57.9136C40.6148 58.2503 35.8746 58.4273 30.0107 58.4273C26.6524 58.4273 23.6627 58.3696 20.7998 58.2563C22.4944 53.4186 23.8952 50.3916 25.4434 47.9753C26.9814 45.575 28.8913 43.4226 32.0218 40.583C35.5279 37.4024 35.7919 31.9818 32.6113 28.4755C29.4308 24.9693 24.0099 24.7053 20.5039 27.886C16.7183 31.3199 13.6434 34.6156 11.0089 38.7276C10.6026 39.362 10.2123 40.0068 9.83572 40.6647C8.23201 39.5099 6.31535 38.9751 4.42119 39.0657C4.33865 36.2706 4.29639 33.4366 4.29639 30.5703C4.29639 24.5273 4.48415 18.6285 4.84158 12.9339C5.16849 7.72537 9.30417 3.58452 14.5024 3.22713Z" fill="#FFCC29" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M55.7078 27.4436C52.0272 22.3303 45.9471 21.4891 40.9997 21.5234C37.4494 21.548 34.5786 18.9317 34.5786 15.3813V2.75293C34.8878 2.75844 35.1944 2.76452 35.4987 2.77115C37.6568 2.81833 39.7718 3.5343 41.5071 4.87365C46.6332 8.82984 49.7729 12.172 53.6459 17.4483C54.9004 19.1572 55.5805 21.2066 55.6335 23.3038C55.6679 24.6749 55.6928 26.0549 55.7078 27.4436Z" fill="#AE8500" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28.6431 32.0751C29.836 33.3898 29.737 35.4225 28.4221 36.6154C25.087 39.6407 22.813 42.1502 20.9324 45.0857C19.039 48.0411 17.4563 51.5648 15.6617 56.7201C15.2951 57.7731 14.4087 58.5613 13.3198 58.8017C12.2308 59.0425 11.0949 58.7014 10.3186 57.9008L2.52638 49.8651C1.29058 48.5905 1.32189 46.5557 2.5963 45.3201C3.87072 44.0841 5.90566 44.1154 7.14143 45.39L11.3967 49.7781C12.6644 46.6594 13.977 44.025 15.5194 41.6177C17.8112 38.0406 20.5221 35.1023 24.1028 31.8538C25.4177 30.6611 27.4504 30.7601 28.6431 32.0751Z" fill="#AE8500" />
        </svg>
        <h3>Passionate and Skilled Team</h3>
        <p>Our team consists of trained and experienced professionals who are passionate about bringing our clients' ideas to life.</p>
      </div>
      {/* ./wc_item */}
      <div className="wc_item">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6214 66.5717H31.3797C28.6993 66.5717 26.4941 64.4592 26.4182 61.7802C26.1181 51.1837 26.1264 37.6962 26.4434 27.2612C26.5136 24.951 28.1787 22.9755 30.4725 22.6937C33.6013 22.3095 36.3998 22.3095 39.5286 22.6937C41.8224 22.9755 43.4875 24.951 43.5577 27.2612C43.8745 37.6962 43.883 51.1837 43.5829 61.7802C43.507 64.4592 41.3018 66.5717 38.6214 66.5717Z" fill="#F6B7D5" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56.2673 66.5721H63.5088C66.1892 66.5721 68.3898 64.4721 68.4532 61.7926C68.7748 48.2126 68.7678 22.4773 68.4322 9.42309C68.3727 7.11268 66.7098 5.13852 64.4158 4.8568C61.2872 4.47254 58.4887 4.47254 55.3602 4.8568C53.0661 5.13852 51.4032 7.11268 51.3437 9.42309C51.0081 22.4773 51.0011 48.2126 51.3227 61.7926C51.3861 64.4721 53.5868 66.5721 56.2673 66.5721ZM55.7466 18.2209C56.2391 18.2209 56.6833 18.6069 56.7901 19.0944C57.0896 20.3174 56.4967 21.4155 55.7474 21.4155C55.2549 21.4155 54.8106 21.0295 54.7038 20.542C54.4043 19.3189 54.9972 18.2209 55.7466 18.2209Z" fill="#FE8BB1" />
        </svg>
        <h3>Technology-Driven Innovation</h3>
        <p>Our smart public toilets incorporate the latest technology, promoting cleanliness and safety in public spaces.</p>
      </div>
      {/* ./wc_item */}
      <div className="wc_item">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5678 3.69455C38.6963 6.50747 39.7883 9.01521 42.3384 11.3701C44.9054 13.7246 47.7796 15.4379 50.9403 16.3459C54.5453 17.6268 57.7802 21.1318 58.6829 24.7782C59.585 28.4245 59.0367 32.4307 56.9972 34.8975C54.9556 37.3652 51.5709 37.6654 48.9331 35.8863C45.8355 34.2355 42.6245 33.0517 39.0562 33.0517C35.4878 33.0517 32.2768 34.2355 29.1792 35.8863C26.5415 37.6654 23.1574 37.3652 21.1164 34.8975C19.0763 32.4307 18.527 28.4245 19.4291 24.7782C20.3311 21.1318 23.5656 17.6268 27.1707 16.3459C30.3314 15.4379 33.2057 13.7246 35.7728 11.3701C38.3229 9.01521 39.4149 6.50747 39.5434 3.69455H38.5678Z" fill="#F8B64C" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7345 53.6867C19.3891 56.0267 15.3513 56.5543 12.9568 53.6352C9.2566 49.3695 5.276 44.6519 2.42487 39.6249C1.72045 37.6701 3.65171 35.859 5.71273 36.0809C8.0289 36.2974 10.819 37.6247 13.2752 39.8318C15.8999 42.1575 17.3349 45.0754 19.0194 47.8778C19.7302 49.5003 21.1035 51.1068 21.7345 53.6867Z" fill="#FEB400" />
        </svg>
        <h3>Results and Trust</h3>
        <p>When you work with us, you can expect reliable results and complete trust. We honor our commitments and prioritize every client.</p>
      </div>
      {/* ./wc_item */}
    </div>
    {/* ./wc_grid */}
  </div>
  {/* ./gg-container */}
</section>



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
              Jaldheja's smart toilet solutions have revolutionized sanitation in
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
              We implemented Jaldheja’s smart toilets at several public parks
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
              Jaldheja’s innovative solutions in public sanitation have been a
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
              Delve into the client testimonial section at Jaldheja. It's a
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

    
    </>
  )
}

export default About
