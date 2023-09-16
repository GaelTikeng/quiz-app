import React from "react";
import "./BeforeFooter.css";

import svg1 from "../../../../public/image/svg1.png"
import svg2 from "../../../../public/image/svg2.png"
import svg3 from "../../../../public/image/svg3.png"
import svg4 from "../../../../public/image/svg4.png"
import Phone from "../../../../public/image/Online learning-amico.png";

function BeforeFooter() {
  return (
    <div className="beforefooter_container">
      <div className="div-before">
        <div className="before-container">
          <h1 className="head">SmartBrain promotes distance education and online course</h1>
          
            <ul className="svg_ul">
              <li>
                <img src={svg1} alt="svg" className="vector" />
                <h4 className="vector_text">Increase student's knowledge</h4>
                <p className="vector_p">
                  You have the posibility to set a all quizzes of any type
                </p>
              </li>
              <li>
                <img src={svg2} alt="svg" className="vector" />
                <h4 className="vector_text">Quality Leads and Added value</h4>
                <p className="vector_p">
                  Give personalized answers to your custumers most pressing
                  questions while qualifying your leads
                </p>
              </li>
              <li>
                <img src={svg3} alt="svg" className="vector" />
                <h4 className="vector_text">
                  Pubish Within Minutes Everywhere
                </h4>
                <p className="vector_p">
                  Take quizzes whenever you want and where ever you are.
                </p>
              </li>
              <li>
                <img src={svg4} alt="svg" className="vector" />
                <h4 className="vector_text">
                  Easy and simple to use
                </h4>
                <p className="vector_p">
                  Set quizzes at your own pase and share the link to your students
                </p>
              </li>
            </ul>
        </div>

        <div className="phone_div">
          <img src={Phone} alt="footer_image" className='phone_image' />
        </div>
      </div>
    </div>
  );
}

export default BeforeFooter;
