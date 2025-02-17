// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";


import AnimatedText from '../../components/AnimatedText';

// img
import product_bg from "../../assets/images/products/tg_bg.png";
import ebSectorsImg from "../../assets/images/products/tg_sectors.png";
import ebStatesImg from "../../assets/images/products/tg_states.png";
import ebAuthoritiesImg from "../../assets/images/products/tg_authorities.png";
import featuresVideo1 from "../../assets/images/products/tg1.mp4"
import featuresImg1 from "../../assets/images/products/featuresImg1.png"
import featuresImg2 from "../../assets/images/products/featuresImg2.png"


export default function TenderGrid() {

  return (
    <>
      <section className="productPage_banner">
        <div className="gg-container">
          <AnimatedText>
            <div className="heading">
              <h1 className="gg-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                  <g clip-path="url(#clip0_177_117)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1399 0V4.22049L17.5205 16.2034C17.5191 16.2039 17.5177 16.2044 17.5163 16.2049L9.92528 6.79503L6.94096 3.8107L5.67427 5.07736L4.31066 6.4414L7.29499 9.42572L16.7164 16.9004C16.7127 16.9076 16.709 16.9148 16.7053 16.9221L4.72049 15.6398H0.5V17.431V19.3601H4.72049L16.6152 17.9897C16.6206 18.0075 16.6263 18.0251 16.6324 18.0426L7.29499 25.5751L4.31066 28.5594L5.57701 29.8258L6.94096 31.1901L9.92533 28.2058L17.3417 18.8578C17.3647 18.8696 17.3881 18.8807 17.4117 18.8913L16.1399 30.7796V35.0001H17.9312L19.8601 35V30.7795L18.4948 18.929C18.5195 18.92 18.544 18.9103 18.5681 18.9L26.0747 28.2051L29.059 31.1894L30.3257 29.9228L31.6893 28.5586L28.705 25.5743L19.3309 18.1372C19.3384 18.1197 19.3456 18.102 19.3524 18.0841L31.2795 19.3601H35.5V17.5691V15.64H31.2795L19.3373 17.0159C19.3338 17.0074 19.3302 16.999 19.3265 16.9906L28.705 9.42493L31.6893 6.44061L30.4229 5.17418L29.059 3.80984L26.0747 6.79416L18.5786 16.2425C18.5772 16.2418 18.5757 16.2412 18.5741 16.2405L19.8601 4.22049V0H18.069H16.1399Z" fill="#CD1F7C" />
                  </g>
                  <defs>
                    <clipPath id="clip0_177_117">
                      <rect width="35" height="35" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                Tender Grid
              </h1>
              <h3>The Ultimate Platform for Tender Seekers!</h3>
              <Link to={"https://apps.growthgrids.com/tendergrid"} target="_blank" rel="noopener noreferrer" className="gg-viewButton">View Tender Grid
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></Link>
            </div>
          </AnimatedText>

          <div className="product_bg">
            <img src={product_bg} alt="product bg" />
          </div>

          <div className="product_about">
            <div className="prah">
              Tender Grid offers a wealth of information for companies wishing to search and take advantage of tender opportunities. It is intended to make it easier to identify relevant tenders and interact with prospective contracts and projects, and is a game-changing platform that redefines how you approach tender opportunities. It consolidates various tenders into a single, accessible platform, simplifying the search process. Moreover, the user-friendly interface allows for tailored searches, ensuring that you only focus on opportunities that align with your goals.
            </div>
            <div className="prah">
              Therefore, Tender Grid keeps you updated in real-time, providing a competitive advantage. The heart of Tender Grid lies in its commitment to making the tender identification process as smooth as possible. The platform has an interface that streamlines your search efforts. With just a few clicks, you can filter tenders based on specific criteria that matter most to you, such as sectors, regions, authorities etc. This customisation empowers you to pinpoint the most relevant opportunities, saving time and resources.
            </div>
          </div>
          {/* ./product_about */}
        </div>
        {/* ./gg-container */}
      </section>

      <section className="exporeBy_wrapper">
        <div className="gg-container">
          <div className="gg-grid">
            <div className="gg-col-sm-6 gg-col-12">
              <div className="ebw_card">
                <AnimatedText>
                  <div className="ebw_head">
                    <h4>Explore by Sectors</h4>
                    <p>Venture into new business avenues and stay ahead of the competition with our comprehensive sector-based tender exploration.</p>
                  </div>
                </AnimatedText>
                <img src={ebSectorsImg} alt="eb sectorsr" />
              </div>
              {/* ./ebw_card */}
            </div>
            <div className="gg-col-sm-6 gg-col-12">
              <div className="ebw_card">
                <AnimatedText>
                  <div className="ebw_head">
                    <h4>Explore by States</h4>
                    <p>Stay informed and competitive with our state-based tender exploration, tailored to your regional growth objectives.</p>
                  </div>
                </AnimatedText>
                <img src={ebStatesImg} alt="" />
              </div>
              {/* ./ebw_card */}
            </div>
            <div className="gg-col-sm-6 gg-col-12">
              <div className="ebw_card">
                <AnimatedText>
                  <div className="ebw_head">
                    <h4>Explore by Authorities</h4>
                    <p>Stay ahead in the competitive landscape by exploring tenders from key authorities and access tailored opportunities for business growth and success.</p>
                  </div>
                </AnimatedText>
                <img src={ebAuthoritiesImg} alt="" />
              </div>
              {/* ./ebw_card */}
            </div>
            <div className="gg-col-sm-6 gg-col-12">
              <div className="ebw_card">
                <AnimatedText>
                  <div className="ebw_head">
                    <h4>Explore by Websites</h4>
                    <p>Unlock new business avenues and stay ahead of the competition with our comprehensive sector-based tender exploration.</p>
                  </div>
                </AnimatedText>
                <img src={ebSectorsImg} alt="" />
              </div>
              {/* ./ebw_card */}
            </div>
          </div>
          {/* ./gg-grid */}
        </div>
        {/* ./container */}
      </section>

      <section className="key_feature">
        <div className="gg-container">
          <AnimatedText>
            <h2 className="gg-title">Key Features</h2>
          </AnimatedText>
          <div className="gg-grid">
            <div className="gg-col-sm-3 gg-col-12">
              <div className="cont_item">
                <h6>Over</h6>
                <h5 className="countNumber">10,000+</h5>
                <div className="subSub">Websites</div>
              </div>
              {/* <!-- ./cont_item --> */}
            </div>
            <div className="gg-col-sm-3 gg-col-12">
              <div className="stat_item">
                <div className="topHead">
                  <h5 className="count">Tender updates within 24 hours</h5>
                </div>
                <p>Say hello to staying ahead of the curve with timely updates within 24 hours and goodbye to missed opportunities. With our real-time information, you have more time to prepare, plan, and submit your bids effectively.</p>
              </div>
              {/* ./stat_item */}
            </div>
            <div className="gg-col-sm-3 gg-col-12">
              <div className="stat_item">
                <div className="topHead">
                  <h5 className="count">Share Tenders With Your Team and Friends</h5>
                </div>
                <p>With the option to share tenders with your team and friends on various online platforms, you can have smooth communication, streamline decision-making, and ensure everyone is on the same page.</p>
              </div>
              {/* ./stat_item */}
            </div>
            <div className="gg-col-sm-3 gg-col-12">
              <div className="stat_item">
                <div className="topHead">
                  <h5 className="count"> Add to Favourites: Keep Your Best Tenders</h5>
                </div>
                <p>Marking tenders as favourites is your shortcut to efficiency. It allows you to quickly access and revisit the most promising opportunities, saving you valuable time and ensuring that you never miss crucial details.
                </p>
              </div>
              {/* ./stat_item */}
            </div>
          </div>
          {/* ./grid  */}
        </div>
        {/* ./container */}
      </section>

      <section className="productDetial_wrapper">
        <div className="gg-grid">
          <div className="gg-col-sm-5 gg-col-12">
            <div className="pdw_content">
              <h2 className="gg-title">Get Tender Ready Within 24 Hours</h2>
              <p>Marking tenders as favourites is your shortcut to efficiency. It allows you to quickly access and revisit the most promising opportunities, saving you valuable time and ensuring that you never miss crucial details. <br /><br />
                By staying "tender ready" within 24 hours, you gain a significant edge. This allows you to make informed decisions, assess the feasibility of projects, and gauge your resources effectively. Moreover, it enables you to maximise your chances of success and positions you as a proactive and reliable bidder. With our real-time updates, you can confidently understand the dynamic world of tenders, ensuring that you're always in the lead and ready to seize opportunities as they arise. Don't just compete; excel with Tender Grid.</p>
            </div>
            {/* <!-- ./pdw_content --> */}
          </div>

          <div className="gg-col-sm-7 gg-col-12">
            <div className="features_img">
              <video className="hero-video" muted autoPlay={"autoplay"} loop>
                <source src={featuresVideo1} type="video/mp4" />
              </video>
            </div>
            {/* ./features_img */}
          </div>
        </div>
        {/* ./grid  */}
      </section>

      <section className="productDetial_wrapper reserved_wrapper">
        <div className="gg-grid">
          <div className="gg-col-sm-7 gg-col-12">
            <div className="features_img" style={{ backgroundImage: "linear-gradient(to bottom, #00f0ff, rgba(0, 240, 255, 0))" }}>
              <img src={featuresImg2} alt="" />
            </div>
            {/* ./features_img */}
          </div>
          <div className="gg-col-sm-5 gg-col-12">
            <div className="pdw_content">
              <h2 className="gg-title">Boost Your Search With Tender Grid's Advanced Filters</h2>
              <p>Tender Grid empowers you to supercharge your search using our state-of-the-art advanced filters. Our platform provides you with an array of essential parameters, including regions, sectors, authorities, and more, enabling you to fine-tune your research with precision. Whether you're looking for tenders within a specific authority, targeting projects in a particular industry, or narrowing down opportunities by states , our filters offer the flexibility you need. You no longer have to sift through irrelevant listings; instead, you can focus solely on the opportunities that match your "must-have" criteria.</p>
            </div>
            {/* <!-- ./pdw_content --> */}
          </div>
        </div>
        {/* ./grid  */}
      </section>

      <section className="productDetial_wrapper">
        <div className="gg-grid">
          <div className="gg-col-sm-5 gg-col-12">
            <div className="pdw_content">
              <h2 className="gg-title">99.9% Verified Accuracy</h2>
              <p>Tender Grid takes accuracy to the next level. We pride ourselves on delivering a remarkable 99.9% verified accuracy rate, ensuring that you have the most reliable and up-to-date information at your fingertips. With our verified accuracy, you're not just searching for tenders; you're simplifying the tender arena with precision and excellence. This level of accuracy is not just a number; it's your assurance of making informed decisions. It allows you to pinpoint the most relevant tenders with confidence, reducing the margin for error and saving you precious time.</p>
          <br />
              <p>Therefore, you can trust that you're focusing your resources on opportunities that align perfectly with your business objectives. Furthermore, our platform gives you all the details of your desired tenders, along with their relevant documents. Moreover, we go the extra mile by offering the option to download these documents, which makes your entire process hassle-free.</p>
            </div>
            {/* <!-- ./pdw_content --> */}
          </div>

          <div className="gg-col-sm-7 gg-col-12">
            <div className="features_img" style={{ backgroundImage: "linear-gradient(to bottom, #e74694, rgba(231, 70, 148, 0))" }}>
              <img src={featuresImg1} alt="" />
            </div>
            {/* ./features_img */}
          </div>
        </div>
        {/* ./grid  */}
      </section>

    </>
  )
}
