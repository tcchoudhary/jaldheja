// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import AnimatedText from "../components/AnimatedText";
import { GrowthgridsApiList } from "../Services/growthgrids";
import FileInput from "../components/fileInput";
// img
import anchorarrow from "../assets/images/anchor-arrow.svg";
import healthcareIcon from "../assets/images/icons/healthcare.svg";
import salaryBonusIcon from "../assets/images/icons/salary-bonus.svg";
import paidTimeIcon from "../assets/images/icons/paid-time.svg";
import stipendsIcon from "../assets/images/icons/stipends.svg";
import developmentIcon from "../assets/images/icons/development.svg";
import employeeCareIcon from "../assets/images/icons/employee-care.svg";

const statedata = {
  document: null,
  name: "",
  email: "",
  phone: "",
  designation: "",
};

const role = [
  "Reactjs",
  "UI/UX Designer",
  "Php Developer",
  "Software Developer",
  "Software Tester",
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
    if (openPanel === index) {
      setOpenPanel(null); // Close the currently open panel
    } else {
      setOpenPanel(index); // Open the clicked panel
    }
  };
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

  const validateFile = (file) => {
    const allowedExtensions = /(\.pdf)$/i;
    return allowedExtensions?.test(file?.name);
  };

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

    return nameValid && emailValid && phoneValid;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'phone' && isNaN(value)) {
      return
    }
    if (name === "document") {
      // Handle file input separately
      if (files.length > 0) {
        const file = files[0];
        if (file?.size > 10 * 1024 * 1024) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            document: true,
          }));
          notifyError("Please upload a file with size less than 10MB");
        } else if (!validateFile(file)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            document: true,
          }));
          notifyError("Please upload a valid PDF file.");
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            document: false,
          }));

          // Set the selected file in the state
          setValue((prevValue) => ({
            ...prevValue,
            document: file,
          }));
        }
      }
    } else {
      // For non-file inputs, update the value in the state
      setValue((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    }
  };

  //   const handleChange = (e) => {
  //     const { name, value, files } = e.target;
  //     setValue((prevValue) => ({
  //       ...prevValue,
  //       [name]: value,
  //     }));
  //     console.log(value)
  //     if (name === "document" && files.length > 0) {
  //       const file = files[0];

  //       if (file.size > 10 * 1024 * 1024) {
  //         console.log('file size big')
  //         setErrors((prevErrors) => ({
  //           ...prevErrors,
  //           document: true,
  //         }));
  //         notifyError("Please upload a file with size less than 10MB");
  //       } else if (!validateFile(file)) {
  //         setErrors((prevErrors) => ({
  //           ...prevErrors,
  //           document: true,
  //         }));
  //         notifyError("Please upload a valid PDF file.");
  //       } else {
  //         setErrors((prevErrors) => ({
  //           ...prevErrors,
  //           document: false,
  //         }));

  //         // Set the selected file in the state
  //         setValue((prevValue) => ({
  //           ...prevValue,
  //           document: file,
  //         }));
  //       }
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleCheckMsg()) {
      try {
        const formData = value?.document
          ? new FormData()
          : new URLSearchParams();
        formData.append("document", value?.document);
        formData.append("name", value?.name);
        formData.append("email", value?.email);
        formData.append("phone", value?.phone);
        formData.append("designation", value?.designation);
        const response = await GrowthgridsApiList.ApplyJob(
          value?.document,
          formData
        );
        await GrowthgridsApiList.sendEmail(value?.document, formData);
        if (response) {
          resetForm();
          notifySuccess(response?.data?.message);
        }
      } catch (error) {
        notifyError(`${error}`);
      }
    } else {
      notifyError("All fields are required...", "error");
    }
  };

  return (
    <>
      <section className="gg-page_banner careerBanner">
        <div className="gg-container">
          <div className="gab_content">
            <h4 className="sub__title">Careers</h4>
            <div className="gg-title">
              Be an Innovative <br />
              Growth-Gridder!
            </div>
          </div>
          {/* ./gab_content */}
        </div>
        {/* ./gg-container */}
      </section>

      <section className="careerAbout">
        <div className="gg-container">
          <div className="gg-grid">
            <div className="gg-col-sm-6 gg-col-12">
              <AnimatedText>
                <h1 className="gg-title">
                  Find Your Next Breakthrough at Growth Grids.
                </h1>
              </AnimatedText>
            </div>
            <div className="gg-col-sm-6 gg-col-12">
              <AnimatedText>
                <p>
                  At Growth Grids, we provide a culture of trust, empowerment,
                  and appreciation, allowing our team members to thrive from day
                  one. Our commitment to supporting each individual in reaching
                  their full potential is ingrained in our company's ethos.
                  Explore the myriad of perks and benefits designed to enhance
                  your well-being and success on your journey with us. Welcome
                  to a workplace where your growth is our priority.
                </p>
              </AnimatedText>
            </div>
          </div>
          {/* ./gg-grid */}
          <AnimatedText>
            <div className="perk_wrap">
              <div className="item__col">
                <div className="pi_box">
                  <img src={healthcareIcon} alt="Encryption for Employees" />
                  <div className="content">
                    <h4>Encryption for Employees</h4>
                    <p>
                      We believe in troubleshooting your health glitches as a
                      way to maintain strong health. Exe as it is our top
                      priority. We've got your back with regular checkups, and
                      our insurance plans are like the ultimate firewall,
                      shielding you against unforeseen incidents and injuries.
                    </p>
                  </div>
                </div>
                {/* ./pi_box */}
                <div className="pi_box">
                  <img src={salaryBonusIcon} alt="Competitive salary & bonus" />
                  <div className="content">
                    <h4>Competitive salary & bonus</h4>
                    <p>
                      Growth Grids is awarded on the basis of performance and
                      loyalty towards the organization! Snag that bonus—it's not
                      just minimum; it's maximum cheer for your coding feats.{" "}
                    </p>
                  </div>
                </div>
                {/* ./pi_box */}
                <div className="pi_box">
                  <img src={paidTimeIcon} alt="Innovate in Binary" />
                  <div className="content">
                    <h4>Innovate in Binary</h4>
                    <p>
                      Work in an environment where 0s and 1s create solutions.
                      We believe that upskilling is our secret code to tech
                      success- where your knowledge base undergoes regular
                      updates. We turn '404 Skill Not Found' into organising
                      diverse skills training sessions where holistic
                      development of the employee remains at forefront.
                    </p>
                  </div>
                </div>
                {/* ./pi_box */}
              </div>
              <div className="item__col">
                <div className="pi_box">
                  <img src={stipendsIcon} alt="Employee Engagement" />
                  <div className="content">
                    <h4>Employee Engagement</h4>
                    <p>
                      Growth Grids is not your typical workplace; it's a space
                      where we regularly conduct sports carnivals, indoor and
                      outdoor games, tournaments, and festivals that mirror our
                      vibrant company culture. After all, discovering your
                      hidden talents while working can lead to a more fulfilling
                      and rewarding career.
                    </p>
                  </div>
                </div>
                {/* ./pi_box */}
                <div className="pi_box">
                  <img src={developmentIcon} alt="Luxurious Infrastructure" />
                  <div className="content">
                    <h4>Luxurious Infrastructure</h4>
                    <p>
                      Our office campus consists of a variety of amenities,
                      ranging from canteens that offer a wide range of delicious
                      and healthy food options to a gym equipped with
                      state-of-the-art equipment and a games room that provides
                      a fun and engaging environment for you to unwind and
                      socialise with your colleagues.
                    </p>
                  </div>
                </div>
                {/* ./pi_box */}
                <div className="pi_box">
                  <img
                    src={employeeCareIcon}
                    alt="Balancing Bytes and Breaks"
                  />
                  <div className="content">
                    <h4>Balancing Bytes and Breaks</h4>
                    <p>
                      The organisation offers five working days where the week
                      isn't just a schedule; it's a strategic investment in the
                      well-being and productivity of our employees, aligning
                      with the modern ethos of work-life balance because even
                      the best coder needs a debug break.
                    </p>
                  </div>
                </div>
                {/* ./pi_box */}
              </div>
            </div>
          </AnimatedText>
          {/* ./perk_wrap */}
        </div>
        {/* ./gg-container */}

        <div className="ca_background">
          <div className="text_word">
            We always have room <br />
            for Talent!
          </div>
        </div>
      </section>

      <section className="section applyJobs">
        <div className="gg-container">
          <AnimatedText>
            <div className="vw_heading">
              <h2 className="gg-title">Available positions</h2>
              <h4>Tech Innovators, Data Visionaries, IT Explorers wanted</h4>
            </div>
          </AnimatedText>
          {/* ./vw_heading */}

          <div className="accordion">
            <div className={`panel ${openPanel === 0 ? "" : "closed"}`} key={0}>
              <div className="panel-header" onClick={() => togglePanel(0)}>
                <div className="type">Full Time</div>
                <div className="experience">0-4 Years Experience</div>
                <div className="jobName">UI/UX Designer</div>
                <div className="arrowBtn">
                  <img src={anchorarrow} alt="" />
                </div>
              </div>
              <div
                className={`panel-content ${
                  openPanel === 0 ? "panelOpen" : ""
                }`}
                style={openPanel === 0 ? { height: 440 } : { height: 0 }}
              >
                <div className="jobDetails">
                  <p>
                    We are searching for a UI/UX designer to make our software
                    into easy-to-use products for our prospective clients. The
                    duties encompass building navigation components, designing
                    graphics, and gathering user requirements. In order to be
                    successful in this role, you should have prior knowledge and
                    experience of wireframe tools and design software with a
                    strong portfolio of professional design projects.
                    Additionally, strong communication skills and team spirit
                    are a must to collaborate with various clients.
                  </p>

                  <div className="subHead">Requirements</div>
                  <ul>
                    <li>
                      Obtaining and assessing user requirements while working
                      with engineers and product managers.
                    </li>
                    <li>
                      Using process flows, storyboards, and sitemaps to
                      illustrate design concepts.
                    </li>
                    <li>
                      Designing graphical user interface components, such as
                      tabs, menus, and widgets.
                    </li>
                    <li>Recognize and troubleshoot UX issues.</li>
                  </ul>
                  <Link
                    className="gg-mainButton"
                    onClick={() => {
                      value.designation = "UI/UX Designer";
                      setIsFormVisible(true);
                    }}
                  >
                    Apply now
                  </Link>
                </div>
              </div>
            </div>

            <div className={`panel ${openPanel === 1 ? "" : "closed"}`} key={1}>
              <div className="panel-header" onClick={() => togglePanel(1)}>
                <div className="type">Full Time</div>
                <div className="experience">0-4 Years Experience</div>
                <div className="jobName">Software Tester</div>
                <div className="arrowBtn">
                  <img src={anchorarrow} alt="" />
                </div>
              </div>
              <div
                className={`panel-content ${
                  openPanel === 1 ? "panelOpen" : ""
                }`}
                style={openPanel === 1 ? { height: 480 } : { height: 0 }}
              >
                {openPanel === 1 ? (
                  <div className="jobDetails">
                    <p>
                      We are on the lookout for a results-oriented software
                      tester who will be in charge of designing and running
                      software usability tests. The applicant need to be able to
                      run tests, assess the results, and have a working
                      knowledge of software and test design in order to succeed
                      as a software tester. Ultimately, the software tester
                      should be goal-oriented, have strong communication
                      abilities, and be skilled in software programming and
                      software test design.
                    </p>

                    <div className="subHead">Requirements</div>
                    <ul>
                      <li>
                        Familiarity with Manual testing, Api Testing ,Mob App
                        Testing , UAT, Beta Testing and Exploratory Testing.
                      </li>
                      <li>
                        Working experience on defect tracking tool (JIRA) and
                        must know Agile Process, preferably worked in agile
                        methodology development cycles.
                      </li>
                      <li>
                        Knowledge of designing test cases and test planning,
                        executing test cases, and recording test results;
                        identifying and documenting defects; and working closely
                        with the development team to ensure timely resolution.
                      </li>
                      <li>
                        The candidate must possess an analytical mindset,
                        problem-solving aptitude, skillful critical thinking,
                        and communication abilities.
                      </li>
                    </ul>
                    <Link
                      className="gg-mainButton"
                      onClick={() => {
                        value.designation = "Software Tester";
                        setIsFormVisible(true);
                      }}
                    >
                      Apply now
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className={`panel ${openPanel === 2 ? "" : "closed"}`} key={2}>
              <div className="panel-header" onClick={() => togglePanel(2)}>
                <div className="type">Full Time</div>
                <div className="experience">0-4 Years Experience</div>
                <div className="jobName">React Developer</div>
                <div className="arrowBtn">
                  <img src={anchorarrow} alt="" />
                </div>
              </div>
              <div
                className={`panel-content ${
                  openPanel === 2 ? "panelOpen" : ""
                }`}
                style={openPanel === 2 ? { height: 440 } : { height: 0 }}
              >
                {openPanel === 2 ? (
                  <div className="jobDetails">
                    <p>
                      We are searching for a proficient React.js developer for
                      our team of front-end developers. Your core responsibility
                      in this role will be developing and implementing user
                      interface components using React.js concepts and workflows
                      like Redux, Flux, and Webpack. In addition, you will be in
                      charge of front-end codebase documentation, performance
                      analysis, optimisation, and profiling. Excellent front-end
                      coding abilities, a solid grasp of progressive web
                      applications, and in-depth knowledge of JavaScript and
                      React concepts are all necessary to be successful in this
                      role.
                    </p>
                    <div className="subHead">Requirements</div>
                    <ul>
                      <li>
                        Thorough knowledge of HTML, JavaScript, CSS, and
                        front-end languages.
                      </li>
                      <li>
                        Familiarity with Webpack, Redux, Flux, and React.js,
                        among other React.
                      </li>
                      <li>
                        Familiarity with Webpack, Redux, Flux, and React.js,
                        among other React.
                      </li>
                      <li>Proficient in troubleshooting skills.</li>
                    </ul>
                    <Link
                      className="gg-mainButton"
                      onClick={() => {
                        value.designation = "Reactjs";
                        setIsFormVisible(true);
                      }}
                    >
                      Apply now
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className={`panel ${openPanel === 3 ? "" : "closed"}`} key={3}>
              <div className="panel-header" onClick={() => togglePanel(3)}>
                <div className="type">Full Time</div>
                <div className="experience">0-4 Years Experience</div>
                <div className="jobName">PHP Developer</div>
                <div className="arrowBtn">
                  <img src={anchorarrow} alt="" />
                </div>
              </div>
              <div
                className={`panel-content ${
                  openPanel === 3 ? "panelOpen" : ""
                }`}
                style={openPanel === 3 ? { height: 470 } : { height: 0 }}
              >
                {openPanel === 3 ? (
                  <div className="jobDetails">
                    <p>
                      We are seeking a PHP developer who will be in charge of
                      overseeing back-end services and data exchanges between
                      users and the server. The development of all server-side
                      logic, the definition and upkeep of the central database,
                      and ensuring optimal performance and front-end
                      responsiveness to requests will be your main priorities.
                      You will also be in charge of incorporating your
                      colleague’s front-end elements into the application.
                      Consequently, a fundamental grasp of front-end
                      technologies is a must.
                    </p>

                    <div className="subHead">Requirements</div>
                    <ul>
                      <li>
                        Familiarity with front-end technologies, including
                        HTML5, CSS3, JavaScript, J-Query, AJAX, and Bootstrap
                        4&5.{" "}
                      </li>
                      <li>
                        Proficient with back-end technologies including,
                        OOP,CodeIgniter 3 , Larave 8,9,10.{" "}
                      </li>
                      <li>Working knowledge of SQL/NoSQL, RDBMS databases.</li>
                      <li>
                        Familiarity with common third-party APIs like Google,
                        Facebook, eBay, etc. and with the REST API (RESTful
                        API).{" "}
                      </li>
                      <li>
                        Expertise in using code versioning systems such as SVN,
                        Git, Mercurial, and CVS.
                      </li>
                    </ul>
                    <Link
                      className="gg-mainButton"
                      onClick={() => {
                        value.designation = "Php Developer";
                        setIsFormVisible(true);
                      }}
                    >
                      Apply now
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          {/* ./accordion */}
        </div>
        {/* ./gg-container */}
      </section>

      <div className={`sidebar-overlay ${isFormVisible ? "active" : ""}`}></div>
      <div
        className={`applyJobForm ${isFormVisible ? "active" : ""}`}
        id="sidebar"
      >
        <div
          className="btn__close"
          id="sidebarBtnClose"
          onClick={() => setIsFormVisible(false)}
        >
          close
        </div>
        <div className="scroll_wrapper">
          <h4 className="title">Apply for this job</h4>
          <form onSubmit={handleSubmit}>
            <div className="input_grp">
              {errors.document && (
                <span className="error-message">
                  Please upload your document
                </span>
              )}
              <div className={`fileUpload ${errors.document ? "error" : ""}`}>
                {/* <span>Upload your document</span> */}
                {/* <FileInput
                  onChange={(file) =>
                    setValue((prevValue) => ({ ...prevValue, document: file }))
                  }
                /> */}
                <FileInput
                  onChange={(file) =>
                    handleChange({
                      target: { name: "document", files: [file] },
                    })
                  }
                />

                {value.document && <p> {value.document.name}</p>}
              </div>
              <span className="info">Maximum file size is 10MB</span>
            </div>
            <div className="gg-grid">
              <div className="gg-col-sm-6">
                <div className={`input_grp ${errors.name ? "error" : ""}`}>
                  <label>Your full name*</label>
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
                  <label>And an e-mail*</label>
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
            {/* ./gg-grid */}
            <div className={`input_grp ${errors.designation ? "error" : ""}`}>
              <label>Your Role*</label>
              <select
                name="designation"
                value={value.designation}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select your designation
                </option>
                {role.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <div className={`input_grp ${errors.phone ? "error" : ""}`}>
              <label>Phone number?*</label>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={value?.phone}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="gg-mainButton">
              Apply now
            </button>
          </form>
        </div>
        {/* ./scroll_wrapper */}
      </div>
    </>
  );
};

export default Careers;
