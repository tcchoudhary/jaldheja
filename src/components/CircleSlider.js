// @ts-nocheck
import React, { useEffect, useState } from 'react';
import image1 from "../assets/images/slide-icon1.png";
import image2 from "../assets/images/slide-icon2.png";
import image3 from "../assets/images/slide-icon3.png";
import image4 from "../assets/images/slide-icon4.png";
import image5 from "../assets/images/slide-icon5.png";


const arrCircle = [
    {
        id: 1, deg: 0, icon: image1,
         title: "Public Spaces & Urban Development",
        disc: "Jaldheja transforms public spaces with our smart sanitation solutions, improving hygiene and accessibility in urban areas. Our state-of-the-art public toilets ensure cleanliness and safety in high-traffic locations like parks, shopping malls, and transportation hubs."
    },
    {
        id: 2, deg: 72, icon: image2,
         title: "Tourism & Hospitality",
        disc: "Enhance your guest experience with Jaldheja's smart public toilets. Whether it's tourist destinations or hotels, our innovative solutions provide hygienic, sustainable, and convenient facilities that meet the needs of travelers and visitors."
    },
    {
        id: 3, deg: 144, icon: image3,
         title: "Government & Municipalities",
        disc: "Jaldheja partners with government bodies to improve public sanitation infrastructure. We provide cost-effective, eco-friendly, and automated toilet solutions for cities, ensuring a cleaner environment and enhanced public health for citizens."
    },
    {
        id: 4, deg: 216, icon: image4,
        title: "Travel and Hospitality Industry",
        disc: "Industry: A strong digital presence is crucial for businesses in the travel and hospitality sector. We offer our expertise to enhance your brand presence through custom website and app development and comprehensive digital branding strategies."
    },
    {
        id: 5, deg: 288, icon: image5,
       title: "Events & Festivals",
        disc: "For large-scale events, festivals, and public gatherings, Jaldheja offers smart sanitation solutions that ensure cleanliness and comfort. Our modular, efficient toilet units are perfect for high-capacity venues, offering both convenience and sustainability."
    },
    {
        id: 6, deg: 302, icon: image5,
          title: "Educational Institutions",
        disc: "We provide schools, universities, and educational institutions with smart sanitation systems that promote hygiene and reduce maintenance costs. Our solutions offer automatic cleaning, real-time tracking, and water-saving features that improve the overall campus experience."
    },  {
        id: 6, deg: 302, icon: image5,
        title: "Commercial Buildings & Shopping Malls",
        disc: "Jaldheja ensures premium sanitation experiences for commercial spaces like offices and malls. Our modern, automated public toilets are designed for efficiency and sustainability, offering a seamless and hygienic experience for employees and customers alike."
    },
]

const CircleSlider = () => {
    const [circleArr, setCircleArr] = useState(arrCircle)
    const [rotationDegree, setRotationDegree] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [progressBar, setProgressBar] = useState([1, 2, 3, 4, 5]);


    const handleCircleClick = (item, index) => {

        setRotationDegree(-item?.deg);
        setActiveIndex(index);
    };
    useEffect(() => {
        
        let count = 1
    }, [activeIndex])

    const handleProgressBarClick = (index) => {
        setRotationDegree(-circleArr[index]?.deg);
        setActiveIndex(index);
    };

    useEffect(() => {
        let count = 0
        const animateCircle = () => {
            setRotationDegree((prevDegree) => (prevDegree + 72) % 360);
            if (count == 4) {
                setActiveIndex(0);
                count = 0
            } else {
                setActiveIndex(prevIndex => prevIndex + 1);
                count++
            }
        };

        const intervalId = setInterval(animateCircle, 4000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <section className="services">
            <div className="circle--slider">
                <div className="rotate--circle count5" style={{ transform: `rotate(${rotationDegree}deg)` }}>
                    <ul className="circle--rotate">
                        {circleArr.map((item, index) => (
                            <li className={`block ${index === activeIndex ? 'active' : ''}`} key={index}>
                                <div className="icon" onClick={() => handleCircleClick(item, index)}>
                                    <img src={item?.icon}  alt='icon' />

                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* Add the rest of your JSX for the animated images and navigation buttons here */}
                </div>
                <div className="industrie_content">
                    {circleArr.map((item, index) => (
                        <div className={`ic__item ${index === activeIndex ? 'active' : ''}`} key={index}>
                            <h4>{item?.title}</h4>
                            <p>{item?.disc}</p>
                        </div>
                    ))}
                    <div class="progressBarContainer">
                        {progressBar.map((item, index) => (
                            <div
                                key={index}
                                className={`bar-item ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => handleProgressBarClick(index)}
                            >
                                <span className="progressBar"></span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* ./industrie_content */}
            </div>
        </section>
    );
};

export default CircleSlider;
