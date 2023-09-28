import React from "react";
import "./AfterHero.css";
import Logo1 from "../../../images/vector.png";
import Logo2 from "../../../images/vector2.png";
import Logo3 from "../../../images/vector3.png";
import Logo4 from "../../../images/vector4.png";


function AfterHero() {
  return (
    <div className="afterhero">
      {/* <img src={Dash} alt="vector" className="vector" /> */}
      <div className="afterhero_div">
        <div className="afterhero_header">
          <h1 className="head">
            You will be able to set a quiz on any subject and test you student's
            understanding of the subject matter
          </h1>
        </div>

        <div className="list">
          <ul className="ul">
            <li>
              <div className="image-text">
                <img src={Logo1} alt="vector" className="vector" />
                <h4 className="vector_text">
                  Optimize Templates
                </h4>
              </div>
              <p className="vector_p">
                Increase your conversation and engage rate
              </p>
            </li>
            <li>
              <div className="image-text">
                <img src={Logo2} alt="vector" className="vector" />
                <h4 className="vector_text">Native Integration</h4>
              </div>
              <p className="vector_p">
                Build your workflow without 3rd party intgretion costs
              </p>
            </li>
            <li>
              <div className="image-text">
                <img src={Logo3} alt="vector" className="vector" />
                <h4 className="vector_text">Branded Contents</h4>
              </div>
              <p className="vector_p">
                Custumize your quizzes according to the school standart
              </p>
            </li>
            <li>
              <div className="image-text">
                <img src={Logo4} alt="vector" className="vector" />
                <h4 className="vector_text">Amazing Support</h4>
              </div>
              <p className="vector_p">Around the clock that support</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AfterHero;
