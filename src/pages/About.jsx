// @ts-nocheck
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "../components/AnimatedText";
import visionImg from "../assets/images/download.jpeg"; // Replace with a relevant image
import aboutHome from "../assets/images/aboutHome.png";

const About = () => {
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
    const handlePrevClick = () => sliderRef.current?.slickPrev();
    const handleNextClick = () => sliderRef.current?.slickNext();

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

  return (
    <>
      <section className="gg-page_banner">
        <div className="gg-container">
          <div className="gab_content">
            <h4 className="sub__title">About Us</h4>
            <h1 className="gg-title">
              Transforming Public Sanitation <br /> in India
            </h1>
          </div>
        </div>
      </section>
      <section className="aboutCompany_wrapper">
        <div className="gg-grid">
          <div className="gg-col-sm-5 gg-col-12">
            <div className="img_contnter">
              <img src={aboutHome} alt="about home" />
            </div>
          </div>
          <div className="gg-col-sm-7 gg-col-12">
            <div className="ac_content">
              <AnimatedText>
                <div className="vw_heading">
                  <h4 className="sub__title">About Company</h4>
                  <h2 className="gg-title">
                    Jaladhija: Revolutionizing Public Sanitation with Smart
                    Solutions
                  </h2>
                </div>
              </AnimatedText>
              {/* ./vw_heading */}
              <AnimatedText>
                <p>
                  At Jaladhija, we are pioneering the future of public sanitation
                  by designing and providing innovative, eco-friendly, and smart
                  toilet solutions. Our mission is to create cleaner, safer, and
                  more sustainable public spaces through cutting-edge
                  technologies that ensure comfort and hygiene for all.
                </p>
              </AnimatedText>

              <AnimatedText>
                <div className="gg-grid">
                  <div className="gg-col-sm-6 gg-col-12">
                    <div
                      className="pointer_info"
                      style={{
                        borderRight: "1px solid #ffffff33",
                        paddingRight: 40,
                      }}
                    >
                      <h5>Smart Sanitation Solutions</h5>
                      <p>
                        We offer state-of-the-art public toilet systems equipped
                        with features like automatic flushing, self-cleaning,
                        and real-time monitoring for hygiene and efficiency.
                      </p>
                    </div>
                    {/* ./pointer_info */}
                  </div>
                  <div className="gg-col-sm-6 gg-col-12">
                    <div className="pointer_info">
                      <h5>Sustainability and Innovation</h5>
                      <p>
                        Our products are designed with sustainability in mind,
                        ensuring energy efficiency, minimal water usage, and a
                        cleaner environment while delivering modern sanitation
                        solutions.
                      </p>
                    </div>
                    {/* ./pointer_info */}
                  </div>
                </div>
              </AnimatedText>
              {/* ./gg-grid */}
            </div>
            {/* ./ac_content */}
          </div>
        </div>
      </section>
      <section className="vision_wrapper">
        <div className="gg-container">
          <div className="gg-grid">
            <div className="gg-col-sm-6 gg-col-12">
              <AnimatedText>
                <div className="vw_heading">
                  <h4 className="sub__title">Our Mission & Vision</h4>
                  <h2 className="gg-title">Innovating for a Cleaner India</h2>
                  <p>
                    <strong>Mission:</strong> “To continuously innovate, learn,
                    and improve our product and operational services. And we
                    will always offer the most effective, environment-friendly,
                    sustainable, low to nominal cost yet five-star aesthetic and
                    experience for the common public.”
                  </p>
                  <p>
                    <strong>Vision:</strong> “We believe in ‘Each problem has a
                    Unique solution’ theory and hence we try tirelessly to
                    create customized and geography-relevant turnkey projects
                    for our clients.”
                  </p>
                </div>
              </AnimatedText>
            </div>
            <div className="gg-col-sm-6 gg-col-12">
              <img src={visionImg} alt="Jaladhija Smart Bio Toilets Vision" />
            </div>
          </div>
        </div>
      </section>

      <section className="whoWeAre_wrapper">
        <div className="gg-container">
          <div className="wa_content">
            <AnimatedText>
              <h2 className="gg-title">Who We Are</h2>
              <p>
                The founders of Jaladhija Smart Bio Toilets are a bunch of
                misfits from different industries who started this company with
                one simple idea in mind: “to change the way Indian users
                perceive and use public toilets.” We intend to innovate and
                co-create low-cost, environment-friendly, and robust toilet
                designs, which let the common man experience a five-star quality
                public toilet—whether at the roadside, in a busy market, bus
                stop, or even a slum area.
              </p>
              <p>
                We strongly believe in the theory that a good ambiance
                encourages responsible user behavior—an ideal example is how we
                conduct ourselves at an airport versus a bus stop. We pride
                ourselves not just on the quality of our products but also on
                our after-sale services as an Operations & Maintenance (O&M)
                service provider. We are, in the truest sense, a toilet operator
                brand rather than just a product manufacturing unit, addressing
                the most pressing problem for city-level corporations and
                administrative bodies.
              </p>
              <p>
                <strong>Quick Fact:</strong> A study conducted in Mumbai in 2019
                found that around 58% of the public toilets surveyed were
                unusable due to a lack of maintenance and cleanliness.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* <section className="whyChoose_wrapper">
        <AnimatedText>
          <div className="vw_heading">
            <h4 className="sub__title">Why Choose Us</h4>
            <h2 className="gg-title">Our Commitment to Excellence</h2>
          </div>
        </AnimatedText>
        <div className="wc_grid">
          <div className="wc_item">
            <h3>Low-Cost Innovation</h3>
            <p>We deliver cutting-edge sanitation solutions at affordable prices, ensuring accessibility for all communities.</p>
            <div className="shapeIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="350" height="351" viewBox="0 0 350 351" fill="none">
                <path d="M87.4999 88.5959H88.0254V88.0704V1.09595H261.974V88.0704V88.5959H262.5H349.474V262.545H262.5H261.974V263.07V350.045H88.0254V263.07V262.545H87.4999H0.525391V88.5959H87.4999Z" stroke="#D5D5D5" />
              </svg>
            </div>
          </div>
          <div className="wc_item">
            <h3>Environment-Friendly Designs</h3>
            <p>Our toilets incorporate sustainable materials and technologies like grey water recycling and solar panels.</p>
            <div className="shapeIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" viewBox="0 0 350 350" fill="none">
                <path d="M1.26123 174.57L175 0.831543L348.739 174.57L175 348.309L1.26123 174.57Z" stroke="#D5D5D5" />
              </svg>
            </div>
          </div>
          <div className="wc_item">
            <h3>Five-Star Experience</h3>
            <p>We bring luxury and hygiene to public toilets with IoT-enabled monitoring and custom designs.</p>
            <div className="shapeIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" viewBox="0 0 350 350" fill="none">
                <path d="M247.056 348.526H102.947L1.04492 246.623V102.517L102.947 0.615112H247.056L348.955 102.514V246.626L247.056 348.526Z" stroke="#D5D5D5" />
              </svg>
            </div>
          </div>
          <div className="wc_item">
            <h3>Reliable O&M Services</h3>
            <p>Our after-sale support ensures long-term cleanliness and functionality for public sanitation facilities.</p>
            <div className="shapeIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="350" height="351" viewBox="0 0 350 351" fill="none">
                <path d="M319.603 175.198L319.231 175.57L319.603 175.943C359.431 215.77 359.431 280.345 319.603 320.174C279.775 360.001 215.199 360.001 175.372 320.174L175 319.802L174.628 320.174C134.8 360.001 70.2252 360.001 30.3967 320.174C-9.4317 280.345 -9.43172 215.77 30.3967 175.943L30.7683 175.57L30.3967 175.198C-9.4317 135.371 -9.4317 70.7958 30.3967 30.9672C70.2252 -8.86114 134.8 -8.86116 174.628 30.9672L175 31.3389L175.372 30.9672C215.199 -8.86115 279.775 -8.86114 319.603 30.9672C359.431 70.7958 359.431 135.371 319.603 175.198Z" stroke="#D5D5D5" />
              </svg>
            </div>
          </div>
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
                    Jaladhija’s smart toilet solutions have revolutionized
                    sanitation in our public spaces. Their focus on maintenance
                    and user-friendly design has made a huge difference.
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
                    Their eco-friendly toilets have improved hygiene in our
                    urban areas, offering a five-star experience at a low cost.
                    Truly a game-changer!
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
                    Implementing Jaladhija’s smart toilets in our parks has
                    enhanced cleanliness and accessibility, especially for
                    underserved communities.
                  </p>
                  <div className="crw_name">Liam Patterson, Park Manager</div>
                  <div className="industry">Public Parks & Recreation</div>
                </div>
              </Slider>
            </div>
            <div className="gg-col-sm-6 gg-col-12">
              <AnimatedText>
                <div className="vw_heading">
                  <h5 className="sub__title">Testimonials</h5>
                  <h2 className="gg-title">
                    Our Clients <br /> Love Our Work
                  </h2>
                  <p>
                    See how Jaladhija Smart Bio Toilets has transformed public
                    sanitation for municipalities, urban planners, and
                    communities across India. Our clients share their
                    experiences of improved hygiene, sustainability, and
                    accessibility.
                  </p>
                  {renderArrows()}
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
        <div className="pattern__bottom"></div>
      </section>

      <section className="aboutNav_wrapper">
        <AnimatedText>
          <h2 className="gg-title">
            "Jaladhija: Smart Sanitation Solutions Management"
          </h2>
        </AnimatedText>
        <div className="flex__box">
          <div className="box__item">
            <div className="box__content">
              <div className="gg-title">Our Vision</div>
              <div className="box__info">
                <p>
                  "To revolutionize public sanitation by providing innovative,
                  eco-friendly, and smart toilet solutions that enhance hygiene
                  and convenience for all." Our vision is to improve public
                  sanitation in every city and community. By integrating smart
                  and sustainable technologies, we aim to create toilets that
                  not only enhance cleanliness but also provide a comfortable
                  and modern experience for all users.
                </p>
                <Link to={"/about-us"} className="buttonLink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_265_46)">
                      <path
                        d="M45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45C34.9264 45 45 34.9264 45 22.5Z"
                        fill="white"
                      />
                      <path
                        d="M12.876 21.408C12.3435 21.408 11.9117 21.8397 11.9117 22.3722C11.9117 22.9048 12.3435 23.3365 12.876 23.3365V21.408ZM12.876 23.3365H32.877V21.408H12.876V23.3365Z"
                        fill="#8B8B8B"
                      />
                      <path
                        d="M26.1838 15.4286L33.1267 22.3714L26.1838 29.3143"
                        stroke="#8B8B8B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <rect
                      x="0.5"
                      y="0.5"
                      width="44"
                      height="44"
                      rx="22"
                      stroke="#8B8B8B"
                    />
                    <defs>
                      <clipPath id="clip0_265_46">
                        <rect width="45" height="45" rx="22.5" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
            {/* ./box__content */}
            <div className="box-card__icon">
              <svg
                width="184"
                height="104"
                viewBox="0 0 184 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_292_123)">
                  <path
                    d="M92 103.5C120.443 103.5 143.5 80.4427 143.5 52C143.5 23.5573 120.443 0.5 92 0.5C63.5573 0.5 40.5 23.5573 40.5 52C40.5 80.4427 63.5573 103.5 92 103.5Z"
                    stroke="#6C2BD9"
                    stroke-dasharray="161.79 161.89"
                  />
                  <path
                    d="M92 103.5C120.443 103.5 143.5 80.4427 143.5 52C143.5 23.5573 120.443 0.5 92 0.5C63.5573 0.5 40.5 23.5573 40.5 52C40.5 80.4427 63.5573 103.5 92 103.5Z"
                    stroke="#6C2BD9"
                    stroke-dasharray="161.79 161.89"
                  />
                  <path
                    d="M132 103.5C160.443 103.5 183.5 80.4427 183.5 52C183.5 23.5573 160.443 0.5 132 0.5C103.557 0.5 80.5 23.5573 80.5 52C80.5 80.4427 103.557 103.5 132 103.5Z"
                    stroke="white"
                    stroke-dasharray="323.58 0.2"
                  />
                  <path
                    d="M52 103.5C80.4427 103.5 103.5 80.4427 103.5 52C103.5 23.5573 80.4427 0.5 52 0.5C23.5573 0.5 0.5 23.5573 0.5 52C0.5 80.4427 23.5573 103.5 52 103.5Z"
                    stroke="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_292_123">
                    <rect width="184" height="104" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/* ./box-card__icon */}
          </div>
          <div className="box__item">
            <div className="box__content">
              <div className="gg-title">Why Us</div>
              <div className="box__info">
                <p>
                  "Leading the way in smart public toilets with cutting-edge
                  technology, reliability, and unmatched customer satisfaction."
                  Our toilets incorporate the latest smart features, including
                  automatic flushing, self-cleaning mechanisms, and real-time
                  maintenance tracking. Our solutions are long-lasting,
                  energy-efficient, and environmentally friendly. We are
                  committed to providing the best-in-class public sanitation
                  solutions that work seamlessly in any location.
                </p>
                <Link to={"/about-us"} className="buttonLink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_265_46)">
                      <path
                        d="M45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45C34.9264 45 45 34.9264 45 22.5Z"
                        fill="white"
                      />
                      <path
                        d="M12.876 21.408C12.3435 21.408 11.9117 21.8397 11.9117 22.3722C11.9117 22.9048 12.3435 23.3365 12.876 23.3365V21.408ZM12.876 23.3365H32.877V21.408H12.876V23.3365Z"
                        fill="#8B8B8B"
                      />
                      <path
                        d="M26.1838 15.4286L33.1267 22.3714L26.1838 29.3143"
                        stroke="#8B8B8B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <rect
                      x="0.5"
                      y="0.5"
                      width="44"
                      height="44"
                      rx="22"
                      stroke="#8B8B8B"
                    />
                    <defs>
                      <clipPath id="clip0_265_46">
                        <rect width="45" height="45" rx="22.5" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
            {/* ./box__content */}
            <div className="box-card__icon">
              <svg
                width="184"
                height="104"
                viewBox="0 0 184 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M132 103.5C160.443 103.5 183.5 80.4427 183.5 52C183.5 23.5573 160.443 0.5 132 0.5C103.557 0.5 80.5 23.5573 80.5 52C80.5 80.4427 103.557 103.5 132 103.5Z"
                  stroke="#6C2BD9"
                />
                <path
                  d="M94 91.5C115.815 91.5 133.5 73.8152 133.5 52C133.5 30.1848 115.815 12.5 94 12.5C72.1848 12.5 54.5 30.1848 54.5 52C54.5 73.8152 72.1848 91.5 94 91.5Z"
                  stroke="white"
                />
                <path
                  d="M56 79.5C71.1878 79.5 83.5 67.1878 83.5 52C83.5 36.8122 71.1878 24.5 56 24.5C40.8122 24.5 28.5 36.8122 28.5 52C28.5 67.1878 40.8122 79.5 56 79.5Z"
                  stroke="white"
                />
                <path
                  d="M18 67.5C26.5604 67.5 33.5 60.5604 33.5 52C33.5 43.4396 26.5604 36.5 18 36.5C9.43959 36.5 2.5 43.4396 2.5 52C2.5 60.5604 9.43959 67.5 18 67.5Z"
                  stroke="white"
                />
              </svg>
            </div>
            {/* ./box-card__icon */}
          </div>
          <div className="box__item">
            <div className="box__content">
              <div className="gg-title">Our Values</div>
              <div className="box__info">
                <p>
                  "Innovation, Sustainability, and Community." Our core values
                  are deeply rooted in innovation, sustainability, and
                  community. We continuously adopt new solutions and
                  technologies that protect the environment and improve public
                  health. These values reflect in every decision and design we
                  make, ensuring a superior experience for every user.
                </p>
                <Link to={"/about-us"} className="buttonLink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_265_46)">
                      <path
                        d="M45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45C34.9264 45 45 34.9264 45 22.5Z"
                        fill="white"
                      />
                      <path
                        d="M12.876 21.408C12.3435 21.408 11.9117 21.8397 11.9117 22.3722C11.9117 22.9048 12.3435 23.3365 12.876 23.3365V21.408ZM12.876 23.3365H32.877V21.408H12.876V23.3365Z"
                        fill="#8B8B8B"
                      />
                      <path
                        d="M26.1838 15.4286L33.1267 22.3714L26.1838 29.3143"
                        stroke="#8B8B8B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <rect
                      x="0.5"
                      y="0.5"
                      width="44"
                      height="44"
                      rx="22"
                      stroke="#8B8B8B"
                    />
                    <defs>
                      <clipPath id="clip0_265_46">
                        <rect width="45" height="45" rx="22.5" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
            {/* ./box__content */}
            <div className="box-card__icon">
              <svg
                width="184"
                height="104"
                viewBox="0 0 184 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_292_128)">
                  <path
                    d="M183.5 52C183.5 66.3376 182.382 79.3045 180.58 88.6751C179.678 93.3645 178.61 97.1277 177.437 99.7066C176.85 100.998 176.249 101.964 175.651 102.601C175.052 103.238 174.501 103.5 174 103.5C173.499 103.5 172.948 103.238 172.349 102.601C171.751 101.964 171.15 100.998 170.563 99.7066C169.39 97.1277 168.322 93.3645 167.42 88.6751C165.618 79.3045 164.5 66.3376 164.5 52C164.5 37.6623 165.618 24.6955 167.42 15.3249C168.322 10.6355 169.39 6.87226 170.563 4.29337C171.15 3.00237 171.751 2.03558 172.349 1.39887C172.948 0.761993 173.499 0.5 174 0.5C174.501 0.5 175.052 0.761993 175.651 1.39887C176.249 2.03558 176.85 3.00237 177.437 4.29337C178.61 6.87226 179.678 10.6355 180.58 15.3249C182.382 24.6955 183.5 37.6623 183.5 52Z"
                    stroke="white"
                    stroke-dasharray="214.74 0.2"
                  />
                  <path
                    d="M153.5 52C153.5 66.3141 151.268 79.2505 147.675 88.5901C145.879 93.2615 143.752 97.0076 141.415 99.5772C139.079 102.147 136.572 103.5 134 103.5C131.428 103.5 128.921 102.147 126.585 99.5772C124.248 97.0076 122.121 93.2615 120.325 88.5901C116.732 79.2505 114.5 66.3141 114.5 52C114.5 37.6859 116.732 24.7495 120.325 15.4099C122.121 10.7385 124.248 6.99237 126.585 4.4228C128.921 1.85338 131.428 0.5 134 0.5C136.572 0.5 139.079 1.85338 141.415 4.4228C143.752 6.99237 145.879 10.7385 147.675 15.4099C151.268 24.7495 153.5 37.6859 153.5 52Z"
                    stroke="white"
                    stroke-dasharray="234.4 0.2"
                  />
                  <path
                    d="M52 103.5C80.4427 103.5 103.5 80.4427 103.5 52C103.5 23.5573 80.4427 0.5 52 0.5C23.5573 0.5 0.5 23.5573 0.5 52C0.5 80.4427 23.5573 103.5 52 103.5Z"
                    stroke="#6C2BD9"
                    stroke-dasharray="323.58 0.2"
                  />
                  <path
                    d="M125.5 52C125.5 66.2807 121.881 79.1857 116.057 88.5046C110.228 97.8305 102.24 103.5 93.5 103.5C84.76 103.5 76.7717 97.8305 70.943 88.5046C65.1187 79.1857 61.5 66.2807 61.5 52C61.5 37.7193 65.1187 24.8143 70.943 15.4954C76.7717 6.16954 84.76 0.5 93.5 0.5C102.24 0.5 110.228 6.16954 116.057 15.4954C121.881 24.8143 125.5 37.7193 125.5 52Z"
                    stroke="white"
                    stroke-dasharray="265.91 0.2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_292_128">
                    <rect width="184" height="104" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/* ./box-card__icon */}
          </div>
        </div>
        {/* ./flex__box */}
      </section>
    </>
  );
};

export default About;
