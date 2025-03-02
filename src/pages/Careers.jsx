// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import AnimatedText from "../components/AnimatedText";
import { GrowthgridsApiList } from "../Services/growthgrids"; // Adjust if needed
import FileInput from "../components/fileInput";
import anchorarrow from "../assets/images/anchor-arrow.svg";

const statedata = {
  document: null,
  name: "",
  email: "",
  phone: "",
  designation: "",
};

const role = [
  "Business Development Manager",
  "Social Media Handling and Blog Writer",
  "Architect",
];

const Careers = () => {
  const [openPanel, setOpenPanel] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [value, setValue] = useState(statedata);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    document: false,
  });

  const resetForm = () => {
    setValue({
      document: null,
      name: "",
      email: "",
      phone: "",
      designation: "",
    });
  };

  const togglePanel = (index) => {
    setOpenPanel(openPanel === index ? null : index);
  };

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const validateEmail = (email) => /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  const validateFile = (file) => /(\.pdf)$/i.test(file?.name);

  const handleCheckMsg = () => {
    const nameValid = value?.name?.trim() !== "";
    const emailValid = validateEmail(value?.email);
    const phoneValid = validatePhone(value?.phone);
    const resumeValid = value?.document !== null;

    setErrors({
      name: !nameValid,
      email: !emailValid,
      phone: !phoneValid,
      document: !resumeValid,
    });

    return nameValid && emailValid && phoneValid && resumeValid;
  };

  const handleChange = (e) => {
    const { name, value: inputValue, files } = e.target;
    if (name === "phone" && isNaN(inputValue)) return;

    if (name === "document") {
      if (files.length > 0) {
        const file = files[0];
        if (file?.size > 10 * 1024 * 1024) {
          setErrors((prev) => ({ ...prev, document: true }));
          notifyError("Please upload a file with size less than 10MB");
        } else if (!validateFile(file)) {
          setErrors((prev) => ({ ...prev, document: true }));
          notifyError("Please upload a valid PDF file.");
        } else {
          setErrors((prev) => ({ ...prev, document: false }));
          setValue((prev) => ({ ...prev, document: file }));
        }
      }
    } else {
      setValue((prev) => ({ ...prev, [name]: inputValue }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleCheckMsg()) {
      try {
        const formData = new FormData();
        formData.append("document", value?.document);
        formData.append("name", value?.name);
        formData.append("email", value?.email);
        formData.append("phone", value?.phone);
        formData.append("designation", value?.designation);

        const response = await GrowthgridsApiList.ApplyJob(value?.document, formData);
        await GrowthgridsApiList.sendEmail(value?.document, formData);

        if (response) {
          resetForm();
          notifySuccess(response?.data?.message);
        }
      } catch (error) {
        notifyError(`${error}`);
      }
    } else {
      notifyError("All fields are required.");
    }
  };

  return (
    <>
      <section className="gg-page_banner careerBanner">
        <div className="gg-container">
          <div className="gab_content">
            <h4 className="sub__title">Careers</h4>
            <div className="gg-title">
              Join Jaladhija <br />
              Smart Bio Toilets!
            </div>
          </div>
        </div>
      </section>

      <section className="careerAbout">
        <div className="gg-container">
          <div className="gg-grid">
            <div className="gg-col-sm-6 gg-col-12">
              <AnimatedText>
                <h1 className="gg-title">
                  Make an Impact with Jaladhija Smart Bio Toilets
                </h1>
              </AnimatedText>
            </div>
            <div className="gg-col-sm-6 gg-col-12">
              <AnimatedText>
                <p>
                  We are hiring people who value and support a good social cause. At Jaladhija Smart Bio Toilets, we’re committed to revolutionizing public sanitation in India. Join a team dedicated to creating sustainable, innovative, and accessible toilet solutions that empower communities and promote hygiene for all.
                </p>
              </AnimatedText>
            </div>
          </div>
          <div className="ca_background">
            <div className="text_word">
              We always have room <br />
              for Passionate Innovators!
            </div>
          </div>
        </div>
      </section>

      <section className="section applyJobs">
        <div className="gg-container">
          <AnimatedText>
            <div className="vw_heading">
              <h2 className="gg-title">Available Positions</h2>
              <h4>Business Minds, Creative Writers, and Design Visionaries Wanted</h4>
            </div>
          </AnimatedText>

          <div className="accordion">
            <div className={`panel ${openPanel === 0 ? "" : "closed"}`} key={0}>
              <div className="panel-header" onClick={() => togglePanel(0)}>
                <div className="type">Full Time</div>
                <div className="experience">Experience Varies</div>
                <div className="jobName">Business Development Manager</div>
                <div className="arrowBtn">
                  <img src={anchorarrow} alt="" />
                </div>
              </div>
              <div
                className={`panel-content ${openPanel === 0 ? "panelOpen" : ""}`}
                style={openPanel === 0 ? { height: 300 } : { height: 0 }}
              >
                <div className="jobDetails">
                  <p>
                    We are looking for a Business Development Manager to drive growth for Jaladhija Smart Bio Toilets. You’ll identify new opportunities, build relationships with clients, and promote our innovative sanitation solutions.
                  </p>
                  <div className="subHead">Requirements</div>
                  <ul>
                    <li>Experience in business development or sales.</li>
                    <li>Strong communication and negotiation skills.</li>
                    <li>Passion for social impact and sustainability.</li>
                  </ul>
                  <Link
                    className="gg-mainButton"
                    onClick={() => {
                      setValue((prev) => ({ ...prev, designation: "Business Development Manager" }));
                      setIsFormVisible(true);
                    }}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            <div className={`panel ${openPanel === 1 ? "" : "closed"}`} key={1}>
              <div className="panel-header" onClick={() => togglePanel(1)}>
                <div className="type">Full Time</div>
                <div className="experience">Experience Varies</div>
                <div className="jobName">Social Media Handling and Blog Writer</div>
                <div className="arrowBtn">
                  <img src={anchorarrow} alt="" />
                </div>
              </div>
              <div
                className={`panel-content ${openPanel === 1 ? "panelOpen" : ""}`}
                style={openPanel === 1 ? { height: 300 } : { height: 0 }}
              >
                <div className="jobDetails">
                  <p>
                    We need a creative individual to manage our social media presence and write engaging blog content. You’ll raise awareness about our mission and connect with our audience through compelling storytelling.
                  </p>
                  <div className="subHead">Requirements</div>
                  <ul>
                    <li>Experience in social media management and content creation.</li>
                    <li>Excellent writing and communication skills.</li>
                    <li>Interest in sanitation and social good.</li>
                  </ul>
                  <Link
                    className="gg-mainButton"
                    onClick={() => {
                      setValue((prev) => ({ ...prev, designation: "Social Media Handling and Blog Writer" }));
                      setIsFormVisible(true);
                    }}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            <div className={`panel ${openPanel === 2 ? "" : "closed"}`} key={2}>
              <div className="panel-header" onClick={() => togglePanel(2)}>
                <div className="type">Full Time</div>
                <div className="experience">Experience Varies</div>
                <div className="jobName">Architect</div>
                <div className="arrowBtn">
                  <img src={anchorarrow} alt="" />
                </div>
              </div>
              <div
                className={`panel-content ${openPanel === 2 ? "panelOpen" : ""}`}
                style={openPanel === 2 ? { height: 300 } : { height: 0 }}
              >
                <div className="jobDetails">
                  <p>
                    We’re seeking an Architect to design innovative, sustainable toilet structures. You’ll work on creating functional and aesthetic designs tailored to diverse geographies.
                  </p>
                  <div className="subHead">Requirements</div>
                  <ul>
                    <li>Degree in architecture or related field.</li>
                    <li>Experience in sustainable design preferred.</li>
                    <li>Commitment to improving public sanitation.</li>
                  </ul>
                  <Link
                    className="gg-mainButton"
                    onClick={() => {
                      setValue((prev) => ({ ...prev, designation: "Architect" }));
                      setIsFormVisible(true);
                    }}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`sidebar-overlay ${isFormVisible ? "active" : ""}`}></div>
      <div className={`applyJobForm ${isFormVisible ? "active" : ""}`} id="sidebar">
        <div className="btn__close" onClick={() => setIsFormVisible(false)}>
          close
        </div>
        <div className="scroll_wrapper">
          <h4 className="title">Apply for this Job</h4>
          <form onSubmit={handleSubmit}>
            <div className="input_grp">
              {errors.document && (
                <span className="error-message">Please upload your resume (PDF)</span>
              )}
              <div className={`fileUpload ${errors.document ? "error" : ""}`}>
                <FileInput
                  onChange={(file) =>
                    handleChange({ target: { name: "document", files: [file] } })
                  }
                />
                {value.document && <p>{value.document.name}</p>}
              </div>
              <span className="info">Maximum file size is 10MB (PDF only)</span>
            </div>
            <div className="gg-grid">
              <div className="gg-col-sm-6">
                <div className={`input_grp ${errors.name ? "error" : ""}`}>
                  <label>Your Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={value?.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="gg-col-sm-6">
                <div className={`input_grp ${errors.email ? "error" : ""}`}>
                  <label>Your Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={value?.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className={`input_grp ${errors.designation ? "error" : ""}`}>
              <label>Your Role*</label>
              <select name="designation" value={value.designation} onChange={handleChange} required>
                <option value="" disabled>Select your role</option>
                {role.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div className={`input_grp ${errors.phone ? "error" : ""}`}>
              <label>Phone Number*</label>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={value?.phone}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="gg-mainButton">
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Careers;