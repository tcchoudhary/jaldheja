// @ts-nocheck
import React, { useState } from "react";
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

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const validateEmail = (email) => /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;
    if (name === "phone" && isNaN(inputValue)) return;

    setValue((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));

    if (inputValue.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        [name]: `${name.replace("_", " ")} field is required`,
      }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (name === "email" && inputValue && !validateEmail(inputValue)) {
      setErrors((prev) => ({ ...prev, [name]: "Please enter a valid email address" }));
    } else if (name === "phone" && inputValue && !validatePhone(inputValue)) {
      setErrors((prev) => ({ ...prev, [name]: "Please enter a valid 10-digit phone number" }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ["name", "email", "phone", "subject"];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!value[field].trim()) {
        newErrors[field] = `${field.replace("_", " ")} field is required`;
      }
    });

    if (value.email && !validateEmail(value.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (value.phone && !validatePhone(value.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      notifyError("Please fill all required fields correctly");
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
      notifyError(`${error.message}`);
    }
  };

  return (
    <>
      <section className="gg-page_banner contactBanner">
        <div className="gg-container">
          <div className="gab_content">
            <h4 className="sub__title">Contact Us</h4>
            <div className="gg-title">
              <h1 className="gg-title">
                "Let’s Innovate Smart Sanitation Together – Reach Out Today!"
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
                <a href="tel:+91-7838974389" className="link">
                  +91-7838974389
                </a>
                <br />
                <br />
                <div className="subTitle">Email Us</div>
                <a href="mailto:jaladhijainfragst@gmail.com" className="link">
                  jaladhijainfragst@gmail.com
                </a>
                <br />
                <br />
                <div className="subTitle">Visit Us</div>
                <a href="#" className="link">
                  2nd Floor, Emerald Heights, Laxmi Nagar, Sinhagad Road Pune, Maharashtra, India
                </a>
              </div>
            </div>
            <div className="gg-col-sm-8 gg-col-xs-12">
              <div className="form_wrapper gs_reveal">
                <h1 className="gg-title">Discuss Your Smart Sanitation Needs</h1>
                <form onKeyDown={handleKeyDown}>
                  <div className="input_grp">
                    <label>Your Full Name*</label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={value.name}
                      onChange={handleChange}
                      name="name"
                      required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                  </div>
                  <div className="input_grp">
                    <label>Your Email*</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={value.email}
                      onChange={handleChange}
                      name="email"
                      required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </div>
                  <div className="input_grp">
                    <label>Your Phone Number*</label>
                    <input
                      type="text"
                      placeholder="Your Phone"
                      value={value.phone}
                      onChange={handleChange}
                      name="phone"
                      required
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                  </div>
                  <div className="input_grp">
                    <label>Company Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      value={value.comp_name}
                      onChange={handleChange}
                      name="comp_name"
                    />
                    {errors.comp_name && <span className="error">{errors.comp_name}</span>}
                  </div>
                  <div className="input_grp">
                    <label>Your Message*</label>
                    <textarea
                      rows="7"
                      placeholder="Tell us about your sanitation project or inquiry"
                      name="subject"
                      value={value.subject}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.subject && <span className="error">{errors.subject}</span>}
                  </div>
                  <button type="submit" className="gg-mainButton" onClick={handleSubmit}>
                    Submit Inquiry
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