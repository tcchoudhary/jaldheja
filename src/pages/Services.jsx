// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";

import AnimatedText from "../components/AnimatedText";

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

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Add useHistory hook

  const tabs = [
    "Hide",
    "Customised Software Development",
    "Digital Marketing Services",
    "Mobile App Development",
    // 'Cloud Service Consulting',
    "Test Automation",
    "UI/UX Design",
    "Web Development",
    "QA and Testing",
    // 'Software Development Consulting',
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (tab, index) => {
    setActiveTab(tab);
    setActiveIndex(index);

    if (location.pathname !== "/services") {
      // Remove hash and replace it with "/"
      navigate(`/services/${tab.replace(/\s+/g, "-").toLowerCase()}`);
    }
  };

  // Ref for the sections
  const sectionRefs = useRef(tabs.map(() => React.createRef()));

  // Intersection Observer callback
  const handleIntersection = (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setActiveTab(tabs[index]);
        setActiveIndex(index);
        window.location.hash = tabs[index].replace(/\s+/g, "-").toLowerCase(); // Update the hash part of the URL
      }
    });
  };

  // Create the Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    });

    // Observe each section
    sectionRefs.current.forEach((ref) => {
      observer.observe(ref.current);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [tabs]);

  useEffect(() => {
    // Check if there's a hash in the URL and activate the corresponding tab
    const hash = window.location.hash.substring(1);
    const index = tabs.findIndex(
      (tab) => tab.replace(/\s+/g, "-").toLowerCase() === hash
    );
    if (index !== -1) {
      setActiveTab(tabs[index]);
      setActiveIndex(index);

      // Scroll to the corresponding section
      const sectionRef = sectionRefs.current[index].current;
      console.log(sectionRefs.current[index].current,"sec");
      if (sectionRef) {
        sectionRef.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <section className="gg-page_banner servicesBanner">
        <div className="gg-container">
          <div className="gab_content">
            <h4 className="sub__title">Our Services</h4>
            <div className="gg-title">
              Growth Grids: <br />
              Precision in Every Byte
            </div>
          </div>
          {/* ./gab_content */}
        </div>
        {/* ./gg-container */}
      </section>

      <section class="serviceInfo">
        <div class="gg-container">
          <div className="vw_heading">
            <AnimatedText>
              <h1 className="gg-title">
                Customer-Centric Tech Excellence: Growth Grids at Your Service.
              </h1>
            </AnimatedText>
            <AnimatedText>
              <p>
                At Growth Grids, our commitment to excellence goes beyond the
                ordinary. We pride ourselves on devising future-proof strategies
                that anticipate and adapt to the dynamic tech scenario.
                Harnessing the latest innovations is not just a goal; it's
                embedded in our DNA. We thrive on pushing our technological
                boundaries, ensuring that your business is not just current but
                ahead of the curve.
              </p>
              <p>
                We believe in placing your needs and aspirations at the core of
                every solution we devise. Our diverse range of services spans
                the entire technological spectrum, providing a one-stop
                destination for all your IT requirements.
              </p>
              <p>
                What sets us apart is not just our expertise but our
                professional workflow. From concept to execution, we follow a
                meticulous and efficient process, ensuring that every project is
                delivered with accuracy and within the stipulated timelines.
                Choose Growth Grids for an unparalleled tech partnership – where
                innovation, customer satisfaction, and professional excellence
                converge.
              </p>
            </AnimatedText>
          </div>
          {/* ./vw_heading */}
        </div>
        {/* ./container */}
      </section>

      <main className="servicesMain">
        <div className="fixedScroll_wrap">
          <ul className="floating_menu">
            {tabs.map((tab, index) => {
              return (
                <li key={index}>
                  <a
                    href={`#service${index + 1}`}
                    className={activeIndex === index ? "active" : ""}
                    onClick={() => handleTabClick(tab, index)}
                  >
                    {tab}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ./fixedScroll_wrap */}

        <section
          ref={sectionRefs.current[0]}
          className="services_details"
          id="service1"
          style={{ display: "none" }}
        >
          <img src={marketingServices} alt="marketing services" />
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">Digital Marketing Services</h2>
              <p>
                <b>Curating Success- Driven Strategies, Not Just Campaigns.</b>
              </p>

              <p>
                In a world flooded with digital noise, Growth Grids stands out
                as your trusted guide to impactful digital marketing. Our
                services go beyond campaigns; we strive to create a strategic
                balance between your individual perspectives and the relevant
                target audience. With a focus on relevant content, data-driven
                decision-making, and hyper-personalised campaign management, we
                upgrade your brand's digital presence. At Growth Grids, we don't
                just steer through the digital arena; we redefine it, ensuring
                an excellent customer experience and lasting client connections.
              </p>

              <ul>
                <li>Strategic Planning</li>
                <li>Persona Mapping</li>
                <li>Content Strategy</li>
                <li>Multi-Channel Campaigns</li>
                <li>ROI Measurement</li>
              </ul>
            </div>
            {/* ./sd_content */}
          </div>
          {/* ./gg-container */}
        </section>

        <section
          ref={sectionRefs.current[1]}
          className="services_details"
          id="service2"
        >
          <img
            src={softwareDevelopment}
            alt="Customised Software Development"
          />
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">Customised Software Development</h2>

              <p>
                <b>
                  From Concept to Code, We Transform Visions into Digital
                  Realities
                </b>
              </p>
              <p>
                At Growth Grids, we specialise in creating software solutions
                that meet the unique needs and requirements of our clients. With
                a team of highly skilled developers and designers, armed with
                extensive domain experience, we diligently design, build,
                deploy, and support software catering to your specific business
                requirements. Our commitment to delivering high-quality
                software, on-time delivery, and exceptional customer service
                sets us apart from our competitors. As your reliable software
                development consulting partner, we delve deep into your needs,
                strategize solutions, and utilise modern technology to ensure
                your software journey is not just successful but transformative.
              </p>

              <ul>
                <li>Post- Support Services</li>
                <li>Custom Design and Development.</li>
                <li>Deployment and Support</li>
                <li>Continuous Improvement</li>
                <li>User Training</li>
              </ul>
            </div>
            {/* ./sd_content */}
          </div>
          {/* ./gg-container */}
        </section>

        <section
          ref={sectionRefs.current[2]}
          className="services_details"
          id="service3"
        >
          <img src={marketingServices} alt="marketing sevices" />
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">Digital Marketing Services</h2>
              <p>
                <b>Curating Success- Driven Strategies, Not Just Campaigns.</b>
              </p>

              <p>
                In a world flooded with digital noise, Growth Grids stands out
                as your trusted guide to impactful digital marketing. Our
                services go beyond campaigns; we strive to create a strategic
                balance between your individual perspectives and the relevant
                target audience. With a focus on relevant content, data-driven
                decision-making, and hyper-personalised campaign management, we
                upgrade your brand's digital presence. At Growth Grids, we don't
                just steer through the digital arena; we redefine it, ensuring
                an excellent customer experience and lasting client connections.
              </p>

              <ul>
                <li>Strategic Planning</li>
                <li>Persona Mapping</li>
                <li>Content Strategy</li>
                <li>Multi-Channel Campaigns</li>
                <li>ROI Measurement</li>
              </ul>
            </div>
            {/* ./sd_content */}
          </div>
          {/* ./gg-container */}
        </section>

        <section
          ref={sectionRefs.current[3]}
          className="services_details"
          id="service4"
        >
          <img src={mobileApp} alt="mobile app developement" />
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">Mobile App Development</h2>

              <p>
                <b>Striving For Brilliance in Every Swipe</b>
              </p>
              <p>
                At Growth Grids, we stand at the forefront of mobile app
                development, crafting intelligent solutions that integrate with
                your business goals. Our dedicated team of app developers,
                backed by a proven track record, passionately delivers premium
                app development services across diverse industries. Following an
                agile methodology, we guarantee on-time delivery of desired app
                solutions. Rigorous quality testing, led by experienced
                professionals, ensures each app attains perfection. With a
                decade of experience and a portfolio of successful Android app
                launches, we commit to delivering the next generation of apps
                for SMBs, enterprises, and startups.
              </p>

              <ul>
                <li>Requirement Analysis</li>
                <li>Appealing UI/UX Design</li>
                <li>Testing and Quality Assurance</li>
                <li>Smooth Deployment</li>
                <li>Post-Launch Support</li>
              </ul>
            </div>
            {/* ./sd_content */}
          </div>
          {/* ./gg-container */}
        </section>

        <section
          ref={sectionRefs.current[4]}
          className="services_details"
          id="service5"
        >
          <img src={testAutomation} alt="Test Automation" />
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">Test Automation</h2>

              <p>
                <b>Beyond Bugs, We Build Confidence</b>
              </p>
              <p>
                Growth Grids delivers top-notch test automation services
                designed to meet the evolving needs of businesses striving for
                impeccable quality at maximum speed. Our intelligent automation
                frameworks and customised strategies focus on the right
                interfaces, minimising risks, and ensuring your applications
                meet the highest standards. In an era demanding rapid
                development cycles and heightened customer expectations, Our
                test automation solutions strengthens businesses by providing
                accuracy through rapid and smooth automated test solutions.
              </p>

              <ul>
                <li>Right Interface Identification</li>
                <li>Intelligent Framework Development</li>
                <li>Scripting and Execution</li>
                <li>Continuous Monitoring</li>
                <li>Risk Mitigation</li>
              </ul>
            </div>
            {/* ./sd_content */}
          </div>
          {/* ./gg-container */}
        </section>

        <section
          ref={sectionRefs.current[5]}
          className="services_details"
          id="service6"
        >
          <img src={uiDesign} alt="UI/UX Design" />
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">UI/UX Design</h2>

              <p>
                <b>From Ideas to Interfaces, We Shape Experiences</b>
              </p>
              <p>
                At Growth Grids, we are dedicated to transforming creative
                visions into extraordinary digital experiences. Our team of
                experts conducts comprehensive user research to gather insights
                and understand your business objectives. We consistently work to
                refine and enhance designs based on user feedback and testing
                results. Moreover, our team of professionals implements
                meticulous attention to detail for flawless design execution.
                Collaborative feedback is at the core of our work values, and
                for that, we encourage client involvement and feedback
                throughout the design process.
              </p>

              <ul>
                <li>Client Collaboration</li>
                <li>User-Centric Research</li>
                <li>Pixel-Perfect Execution</li>
                <li>Interactive Prototypes</li>
                <li>Cost-effectiveness</li>
              </ul>
            </div>
            {/* ./sd_content */}
          </div>
          {/* ./gg-container */}
        </section>

        <section
          ref={sectionRefs.current[6]}
          className="services_details"
          id="service7"
        >
          <img src={webDevelopment} alt="Web Development" />
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">Web Development</h2>

              <p>
                <b>Beyond Pixels, We Architect Digital Success.</b>
              </p>
              <p>
                At Growth Grids, we develop a comprehensive roadmap to
                understand your objectives, brand identity, and target audience.
                We strive to create mobile-friendly and responsive websites for
                optimal user experiences by utilising agile methodologies backed
                by an extensive portfolio of successful web development
                projects. Our commitment lies in shaping not just websites but
                visually appealing and brand-aligned website designs for your
                unique online presence. We smoothly bridge the gap from
                conceptualization to execution, which positions Growth Grids as
                your go-to partner for unparalleled web development excellence.
              </p>

              <ul>
                <li>Client Collaboration</li>
                <li>Expert Deployment and Optimization</li>
                <li>Comprehensive Solutions</li>
                <li>Responsive Design</li>
                <li>Security Assurance</li>
              </ul>
            </div>
            {/* ./sd_content */}
          </div>
          {/* ./gg-container */}
        </section>

        <section
          ref={sectionRefs.current[7]}
          className="services_details"
          id="service8"
        >
          <img src={testingImg} alt="QA and Testing" />
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">QA and Testing</h2>

              <p>
                <b>
                  Pioneering QA Solutions, Engineering Success in Every Line of
                  Code
                </b>
              </p>
              <p>
                At Growth Grids, we incorporate a steadfast commitment to Q&A
                testing. Our approach integrates quality assurance and software
                testing practices into the software development life cycle. With
                a strategic testing strategy encompassing API testing,
                regression testing, and accessibility testing, we ensure to
                deliver our clients high-quality solutions while optimising
                development costs.Our thorough test-case design and execution,
                led by dedicated testing and quality engineering teams,
                transform exploratory and application testing into the core
                factors of our clients' success.
              </p>

              <ul>
                <li>
                  Thorough Performance Testing and Analysis for all
                  applications.
                </li>
                <li>Achieve enhanced performance across diverse projects.</li>
                <li>Ensure on-time delivery of bug-free projects.</li>
                <li>Implement Offshore and Cloud-based Testing strategies.</li>
                <li>
                  Augment User Experience through refined testing methodologies.
                </li>
              </ul>
            </div>
            {/* ./sd_content */}
          </div>
          {/* ./gg-container */}
        </section>
      </main>
    </>
  );
};

export default Services;
