
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { GrowthgridsApiList } from '../Services/growthgrids';


const initialstate = {
    name: "",
    email: "",
    phone: "",
    comp_name: "",
    subject: ""
}

const Contact = () => {
    const [value, setValue] = useState(initialstate);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        comp_name: false,
        subject: false
    });

    const notifySuccess = (message) => {
        toast.success(message);
    };

    const notifyError = (message) => {
        toast.error(message);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const validateName = (name) => {
        return name.trim() !== '';
    };

    const validateCompName = (comp_name) => {
        return comp_name.trim() !== '';
    };

    const handleCheckMsg = () => {
        // Check validation only for fields that have been interacted with
        const nameValid = !errors.name || validateName(value?.name);
        const emailValid = !errors.email || validateEmail(value?.email);
        const phoneValid = !errors.phone || validatePhone(value?.phone);
        const compValid = !errors.comp_name || validateCompName(value?.comp_name);

        setErrors({
            ...errors,
            name: !nameValid,
            email: !emailValid,
            phone: !phoneValid,
            comp_name: !compValid,
            subject: false
        });

        return nameValid && emailValid && phoneValid;
    };

    const handleKeyDown = (e) => {
        if (e.key === " ") {
            e.preventDefault();
        }
    };

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false });
    };

    const handleBlur = (e) => {
        const fieldName = e.target.name;
        let isValid = true;

        switch (fieldName) {
            case 'email':
                isValid = validateEmail(value?.email);
                break;
            case 'phone':
                isValid = validatePhone(value?.phone);
                break;
            case 'name':
                isValid = validateName(value?.name);
                break;
            case 'comp_name':
                isValid = validateCompName(value?.comp_name);
                break;
            case 'subject':
                isValid = value?.subject.trim() !== '';
                break;
            default:
                break;
        }

        setErrors({
            ...errors,
            [fieldName]: !isValid
        });
    };



   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailValid = validateEmail(value?.email);
        const phoneValid = validatePhone(value?.phone);
        const nameValid = validateName(value?.name);
        const compNameValid = validateCompName(value?.comp_name);
        const subjectValid = value?.subject.trim() !== '';

        setErrors({
            email: !emailValid,
            phone: !phoneValid,
            name: !nameValid,
            comp_name: !compNameValid,
            subject: !subjectValid
        });

        if (emailValid && phoneValid && nameValid && compNameValid && subjectValid) {
            try {
                const formData = new URLSearchParams();
                formData.append('name', value?.name);
                formData.append('email', value?.email);
                formData.append('phone', value?.phone);
                formData.append('comp_name', value?.comp_name);
                formData.append('subject', value?.subject);

                const response = await GrowthgridsApiList.submitContactUsForm(formData);
                if (response?.data?.status === 1) {
                    setValue(initialstate);
                    notifySuccess(response?.message);
                 await GrowthgridsApiList.sendEmail(value);
                } else {
                    notifyError(response?.message);
                }
            } catch (error) {
                notifyError(`${error}`);
            }
        } else {
            notifyError('All fields are required...', 'error');
        }
    };

 


    useEffect(() => {
        handleCheckMsg();
    }, [value]);

    return (
        <>
            <section className="gg-page_banner contactBanner">
                <div className="gg-container">
                    <div className="gab_content">
                        <h4 className="sub__title">Contact</h4>
                        <div className="gg-title">Propel Your IT Journey – Drop a Line and Let's Execute Success Code!</div>
                    </div>
                </div>
            </section>

            <section className="contactUs section">
                <div className="gg-container">
                    <div className="gg-grid">
                        <div className="gg-col-sm-4 gg-col-xs-12">
                            <div className="contact_info gs_reveal">
                                <div className="subTitle">Call Us</div>
                                <Link to={"tel:+91-9773356001"} className="link">+91-9773356001</Link>
                                <Link to={"tel:+91-9773356002"} className="link">+91-9773356002</Link>
                                <br />
                                <br />
                                <div className="subTitle">Drop us a line</div>
                                <Link to={"mailto:business@growthgrids.com"} className="link">business@growthgrids.com</Link>
                                <br />
                                <br />
                                <div className="subTitle">Reach us</div>
                                <Link to={"https://maps.app.goo.gl/gFBHqqGEnG7wxVQ67"} target="_blank" className="link">N 79-80 Adinath Nagar, JLN Marg Jaipur-302018, Rajasthan, India</Link>
                            </div>
                        </div>
                        <div className="gg-col-sm-8 gg-col-xs-12">
                            <div className="form_wrapper gs_reveal">
                                <h2 className="gg-title">Let's discuss your project</h2>
                                <form action="" onKeyDown={handleKeyDown}>
                                    <div className={`input_grp ${errors.name ? 'error' : ''}`}>
                                        <label>You should have a name and last name*</label>
                                        <input
                                            type="text"
                                            placeholder="Your Full Name"
                                            value={value?.name}
                                            onChange={(e) => handleChange(e)}
                                            onBlur={(e) => handleBlur(e)}
                                            name="name"
                                        />
                                    </div>
                                    <div className={`input_grp ${errors.email ? 'error' : ''}`}>
                                        <label>And an e-mail*</label>
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            value={value?.email}
                                            onChange={(e) => handleChange(e)}
                                            onBlur={(e) => handleBlur(e)}
                                            name="email"
                                        />
                                    </div>
                                    <div className={`input_grp ${errors.phone ? 'error' : ''}`}>
                                        <label>How about a phone number?*</label>
                                        <input
                                            type="text"
                                            placeholder="Your phone"
                                            value={value?.phone}
                                            onChange={(e) => handleChange(e)}
                                            onBlur={(e) => handleBlur(e)}
                                            name="phone"
                                        />
                                    </div>
                                    <div className="input_grp">
                                        <label>Are you contacting on behalf of a company?</label>
                                        <input
                                            type="text"
                                            placeholder="Your Company"
                                            value={value.comp_name}
                                            onChange={(e) => handleChange(e)}
                                            name="comp_name"
                                        />
                                    </div>
                                    <div className="input_grp">
                                        <label>Now write down your message*</label>
                                        <textarea
                                            rows="7"
                                            placeholder="Your Message"
                                            name='subject'
                                            value={value?.subject}
                                            onChange={(e) => handleChange(e)}
                                        ></textarea>
                                    </div>
                                    <button type='submit' className="gg-mainButton" onClick={handleSubmit}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
