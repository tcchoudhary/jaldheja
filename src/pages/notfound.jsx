// @ts-nocheck
import React, { useEffect } from "react";
import '../assets/css/error.css'
import { useNavigate } from "react-router-dom";


function Error404() {
  const navigate = useNavigate()
  return (
    <>
      <div className='error_mainCont'>
        <div className="loginLogo">
          <h2 onClick={() =>navigate('/')} width={100} >Jaladhija</h2></div>
        <h1 className='code'>404</h1>
        <h2 className='desc'>oops... There's something wrong.</h2>
        <div className="d-flex arrow_error">
          {/* <button className="arrow_btn" onClick={() =>navigate('/')}> */}
            {/* <ArrowBackIcon /> */}
          {/* </button> */}
          <button className="mainButton ghostButton fs-5" onClick={() => navigate('/')}>Go To Home</button>
        </div>
      </div>
    </>
  );
}

export default Error404;
