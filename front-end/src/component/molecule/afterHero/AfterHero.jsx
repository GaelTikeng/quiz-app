import React from "react";
import "./AfterHero.css";
import Logo1 from '../../../../public/image/vector1.png'
import Logo2 from '../../../../public/image/vector2.png'
import Logo3 from '../../../../public/image/vector3.png'
import Logo4 from '../../../../public/image/Vector4.png'
import Dash from '../../../../public/image/dash.png'


function AfterHero() {
  return (
    <div className="afterhero">
      {/* <img src={Dash} alt="vector" className="vector" /> */}
      <div className="afterhero_div">
        <div className="afterhero_header">
          <h1  className="head"> 
            You will be able to set a quiz on any of your subjects and test you student's understanding of the subject matter
          </h1>
        </div>

        <div className="list">
          <ul className="ul">
            <li>
              <img src={Logo1} alt="vector" className="vector" />
              <h4 className="vector_text">Optimize Templates</h4>
              <p className="vector_p">Increase your conversation and engage rate</p>
            </li>
            <li>
              <img src={Logo2} alt="vector"  className="vector"/>
              <h4 className="vector_text">Native Integration</h4>
              <p className="vector_p">Build your workflow without 3rd party intgretion costs</p>
            </li>
            <li>
              <img src={Logo3} alt="vector"  className="vector"/>
              <h4 className="vector_text">Branded Contents</h4>
              <p className="vector_p">Custumize the design of your brand guidlines</p>
            </li>
            <li>
              <img src={Logo4} alt="vector"  className="vector"/>
              <h4 className="vector_text">Amazing Support</h4>
              <p className="vector_p">Around the clock that support</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AfterHero;
