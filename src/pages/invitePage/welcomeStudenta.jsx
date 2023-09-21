import React from "react";
import './welcomeStudenta.css'
import Welcome from "../../../public/image/Welcome-bro.png"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import { useNavigate } from 'react-router-dom'
import Usersnav from "../../component/molecule/Usersnav/Usersnav";



export default function WelcomeSudenta () {

  const navigate = useNavigate()
  const handleClickNext = () => {
    navigate('/welcomestudb')
  }

  return (
    <div className="all">
      {/* <div className="nav-image">
        <img src={Logo} alt="quiz_app logo" />
      </div> */}
      <Usersnav/>
      <div className="grey-section">
        <div className="welcome">
          <h2>You are in !</h2>
          {/* <h1>Welcome to SmartBrain</h1> */}
          <img src ={Welcome} alt="welcome image" className="image"/>
          <p className="p-tag">Are you ready to test your knowledge? This quiz was created by your teacher to help you learn the material.</p>
          <div className="two-btns">
            <button
              // onClick={handleClickPrev}
              className="prev-btn"
            >
              <FaAngleLeft/>
              Prev
            </button>
              <p>1/2</p>
            <button
              onClick={handleClickNext}
              className="next-btn"
            >
              Next
              <FaAngleRight/>
            </button>
          </div>
          
        </div>

      </div>

    </div>
  )
}