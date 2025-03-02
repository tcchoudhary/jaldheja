// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";



const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    "Hide", // Placeholder to align with original structure
    "Smart Civil 5-Star Toilets",
    "Modular Bio-Toilets",
    "Pink Toilets",
    "Disable-Friendly Toilets",
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (tab, index) => {
    setActiveTab(tab);
    setActiveIndex(index);
    if (location.pathname !== "/services") {
      navigate(`/services/${tab.replace(/\s+/g, "-").toLowerCase()}`);
    }
  };

  const sectionRefs = useRef(tabs.map(() => React.createRef()));

  const handleIntersection = (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setActiveTab(tabs[index]);
        setActiveIndex(index);
        window.location.hash = tabs[index].replace(/\s+/g, "-").toLowerCase();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    sectionRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [tabs]);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const index = tabs.findIndex(
      (tab) => tab.replace(/\s+/g, "-").toLowerCase() === hash
    );
    if (index !== -1) {
      setActiveTab(tabs[index]);
      setActiveIndex(index);
      const sectionRef = sectionRefs.current[index].current;
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
            <h4 className="sub__title">Our Solutions</h4>
            <div className="gg-title">
              Jaladhija Smart Bio Toilets: <br />
              Sanitation Revolutionized
            </div>
          </div>
        </div>
      </section>

      <section className="serviceInfo">
        <div className="gg-container">
          <div className="vw_heading">
            <AnimatedText>
              <h1 className="gg-title">
                Transforming Public Hygiene with Smart Solutions
              </h1>
            </AnimatedText>
            <AnimatedText>
              <p>
                At Jaladhija Smart Bio Toilets, we’re pioneering the future of
                public sanitation with innovative, eco-friendly, and customized
                toilet solutions. Our mission is to deliver sustainable,
                low-cost, and five-star quality sanitation experiences to every
                corner of India—from bustling markets to rural slums.
              </p>
              <p>
                With a focus on IoT-enabled operations, eco-conscious designs,
                and accessibility for all, we provide turnkey solutions that
                meet unique geographical and community needs. Our after-sale
                Operations & Maintenance (O&M) services ensure long-term
                cleanliness and functionality, making us a trusted partner for
                municipalities and businesses alike.
              </p>
              <p>
                Choose Jaladhija for sanitation that’s smart, sustainable, and
                built for the future—“Let’s get the shit done” together!
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      <main className="servicesMain">
        <div className="fixedScroll_wrap">
          <ul className="floating_menu">
            {tabs.map((tab, index) => (
              <li key={index}>
                <a
                  href={`#service${index + 1}`}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => handleTabClick(tab, index)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <section
          ref={sectionRefs.current[0]}
          className="services_details"
          id="service1"
          style={{ display: "none" }}
        >
          {/* Hidden section to maintain original structure */}
        </section>

        <section
          ref={sectionRefs.current[1]}
          className="services_details"
          id="service2"
        >
          {/* <img src={smartToilets} alt="Smart Civil 5-Star Toilets" /> */}
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">Smart Civil 5-Star Toilets</h2>
              <p>
                <b>Luxury Meets Sustainability</b>
              </p>
              <p>
                Our Smart Civil 5-Star Toilets bring a premium sanitation
                experience to public spaces. Equipped with IoT-enabled real-time
                monitoring, solar panels, and custom designs, these toilets
                ensure hygiene, energy efficiency, and user comfort. Perfect
                for urban centers and high-traffic areas, they combine
                cutting-edge technology with a five-star aesthetic.
              </p>
              <ul>
                <li>IoT-Enabled Operations</li>
                <li>Solar-Powered Efficiency</li>
                <li>Real-Time Maintenance Alerts</li>
                <li>Customizable Designs</li>
                <li>Five-Star User Experience</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          ref={sectionRefs.current[2]}
          className="services_details"
          id="service3"
        >
          {/* <img src={logo} alt="Modular Bio-Toilets" /> */}
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">Modular Bio-Toilets</h2>
              <p>
                <b>Portable, Eco-Friendly Solutions</b>
              </p>
              <p>
                Designed for rapid deployment, our Modular Bio-Toilets feature
                prefabricated construction and grey water recycling for
                sustainable waste management. These eco-friendly units are
                ideal for events, rural areas, or temporary setups, offering
                durability and low environmental impact with easy installation.
              </p>
              <ul>
                <li>Prefabricated for Quick Setup</li>
                <li>Grey Water Recycling</li>
                <li>Eco-Friendly Materials</li>
                <li>Portable and Scalable</li>
                <li>R&D-Driven Innovation</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          ref={sectionRefs.current[3]}
          className="services_details"
          id="service4"
        >
          {/* <img src={logo} alt="Pink Toilets" /> */}
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">Pink Toilets</h2>
              <p>
                <b>Empowering Women with Safe Sanitation</b>
              </p>
              <p>
                Our Pink Toilets are designed specifically for women, providing
                safe, hygienic, and comfortable facilities in public spaces.
                With custom features tailored to female users, these toilets
                address privacy and safety concerns while maintaining
                sustainability through eco-friendly designs.
              </p>
              <ul>
                <li>Women-Centric Design</li>
                <li>Enhanced Safety Features</li>
                <li>Eco-Friendly Construction</li>
                <li>Customizable Layouts</li>
                <li>Low Maintenance</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          ref={sectionRefs.current[4]}
          className="services_details"
          id="service5"
        >
          {/* <img src={disableFriendly} alt="Disable-Friendly Toilets" /> */}
          <div className="gg-container">
            <div className="sd_content">
              <h2 className="gg-title">Disable-Friendly Toilets</h2>
              <p>
                <b>Inclusive Sanitation for All</b>
              </p>
              <p>
                Our Disable-Friendly Toilets prioritize accessibility, offering
                specially designed features for the differently abled. With IoT
                monitoring, custom layouts, and durable construction, these
                toilets ensure comfort and dignity for all users, making public
                spaces truly inclusive.
              </p>
              <ul>
                <li>Accessibility-Focused Design</li>
                <li>IoT-Enabled Monitoring</li>
                <li>Customizable for Special Needs</li>
                <li>Robust and Durable</li>
                <li>Solar-Powered Options</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;