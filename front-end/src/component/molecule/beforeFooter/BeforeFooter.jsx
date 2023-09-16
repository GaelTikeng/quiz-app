import React from "react";
import "./BeforeFooter.css";

import svg1 from "../../../../public/image/svg1.png"
import svg2 from "../../../../public/image/svg2.png"
import svg3 from "../../../../public/image/svg3.png"
import svg4 from "../../../../public/image/svg4.png"
import Phone from "../../../../public/image/phone_logo.png";

function BeforeFooter() {
  return (
    <div className="beforefooter_container">
      <div className="div-before">
        <div className="before-container">
          <h1 className="head">Content Optimize For The Modern Marketers</h1>
          
            <ul className="svg_ul">
              <li>
                <img src={svg1} alt="svg" className="vector" />
                <h4 className="vector_text">Increase Lead conversation Rate</h4>
                <p className="vector_p">
                  Use our 1000+ beautiful pre-optimized templates to optimize
                  your converstion rate to over 40%
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
                  Intelligent Analytic And Data Integration
                </h4>
                <p className="vector_p">
                  Get custumers insights while helping them, segment your
                  audience and integrate your data with over 1000 tools.
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
