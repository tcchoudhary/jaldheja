import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { GrowthgridsApiList } from "../Services/growthgrids";

const initialstate = {
  name: "",
  email: "",
  phone: "",
  comp_name: "",
  subject: "",
};

const Contact = () => {
  const [value, setValue] = useState(initialstate);
  const [errors, setErrors] = useState({});

  const notifySuccess = (message) => {
    toast.success(message);
  };

  const notifyError = (message) => {
    toast.error(message);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex?.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex?.test(phone);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Perform strict validation for phone number field
    if (name === "phone" && isNaN(value)) {
      return; // Ignore non-numeric input
    }
    setValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Check for empty fields
    if (value?.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name} field is required`,
      }));
    } else {
      // Clear error if field is not empty
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
    // Perform additional field-level validation (e.g., email, phone)
    if (name === "email" && !validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Please enter a valid email address",
      }));
    } else if (name === "phone") {
      if (value?.trim() !== "" && !validatePhone(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Please enter a valid 10-digit phone number",
        }));
      } else {
        // Clear error if phone number is valid
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value?.name && !value?.email && !value?.phone && !value?.file) {
      notifyError("All fields are required");
      return;
    }
    try {
      const formData = new URLSearchParams();
      formData.append("name", value.name);
      formData.append("email", value.email);
      formData.append("phone", value.phone);
      formData.append("comp_name", value.comp_name);
      formData.append("subject", value.subject);
      const response = await GrowthgridsApiList.submitContactUsForm(formData);
      if (response.status === 1) {
        setValue(initialstate);
        notifySuccess(response.message);
        await GrowthgridsApiList.sendEmail(formData);
      } else {
        notifyError(response.message);
      }
    } catch (error) {
      console.log(`${error.message}`);
      notifyError(`${error.message}`);
    }
  };

  return (
    <>
      <section className="gg-page_banner contactBanner">
        <div className="gg-container">
          <div className="gab_content">
            <h4 className="sub__title">Contact</h4>
            <div className="gg-title">
              <h1 className="gg-title">
                "Revolutionize Public Hygiene – Reach Out and Let’s Innovate
                Smart Sanitation Together!"
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="contactUs section">
        <div className="gg-container">
          <div className="gg-grid">
            <div className="gg-col-sm-4 gg-col-xs-12">
              <div className="contact_info gs_reveal">
                <div className="subTitle">Call Us</div>
                <a href="tel:+91-9784545425" className="link">
                  +91-7838974389
                </a>
                <br />
                <br />
                <div className="subTitle">Drop us a line</div>
                <a href="mailto:jaladhijainfragst@gmail.com" className="link">
                  {" "}
                  jaladhijainfragst@gmail.com{" "}
                </a>
                <br />
                <br />
                <div className="subTitle">Reach us</div>
                <a href="# " className="link">
                  {" "}
                  2Nd Floor, Emerald Heights, Laxmi Nagar, Sinhagad Road Pune -,
                  Pune, Maharashtra., India
                </a>
              </div>
            </div>
            <div className="gg-col-sm-8 gg-col-xs-12">
              <div className="form_wrapper gs_reveal">
                <h1 className="gg-title">Let's discuss your Requirement</h1>
                <form action="" onKeyDown={handleKeyDown}>
                  <div className="input_grp">
                    <label>You should have a name and last name*</label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={value.name}
                      onChange={handleChange}
                      name="name"
                      required
                    />
                    {errors.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </div>
                  <div className="input_grp">
                    <label>And an e-mail*</label>
                    <input
                      type="email"
                      placeholder="Your email"
                      value={value.email}
                      onChange={handleChange}
                      name="email"
                      required
                    />
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>
                  <div className="input_grp">
                    <label>How about a phone number?*</label>
                    <input
                      type="text"
                      placeholder="Your phone"
                      value={value.phone}
                      onChange={handleChange}
                      name="phone"
                      required
                    />
                    {errors.phone && (
                      <span className="error">{errors.phone}</span>
                    )}
                  </div>
                  <div className="input_grp">
                    <label>Are you contacting on behalf of a company?</label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      value={value.comp_name}
                      onChange={handleChange}
                      name="comp_name"
                      required
                    />
                    {errors.comp_name && (
                      <span className="error">{errors.comp_name}</span>
                    )}
                  </div>
                  <div className="input_grp">
                    <label>Now write down your message*</label>
                    <textarea
                      rows="7"
                      placeholder="Your Message"
                      name="subject"
                      value={value.subject}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.subject && (
                      <span className="error">{errors.subject}</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="gg-mainButton"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
