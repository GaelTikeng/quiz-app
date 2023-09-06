import React from "react";
import "./AfterHero.css";
import Logo1 from '../../../public/image/vector1.png'
import Logo2 from '../../../public/image/vector2.png'
import Logo3 from '../../../public/image/vector3.png'
import Logo4 from '../../../public/image/Vector4.png'




function AfterHero() {
  return (
    <div className="afterhero">
      <div className="afterhero_div">
        <div className="afterhero_header">
          <h1  className="head"> 
            This Quiz will Take you Knowledge of General Knowledge, Science,
            Chemistry and More.
          </h1>
        </div>

        <div className="list">
          <ul className="ul">
            <li>
              <img src={Logo1} alt="vector" className="vector" />
              <h4>Optimize Templates</h4>
              <p>Increase your conversation and engage rate</p>
            </li>
            <li>
              <img src={Logo2} alt="vector"  className="vector"/>
              <h4>Native Integration</h4>
              <p>Build your workflow without 3rd party intgretion costs</p>
            </li>
            <li>
              <img src={Logo3} alt="vector"  className="vector"/>
              <h4>Branded Contents</h4>
              <p>Custumize the design of your brand guidlines</p>
            </li>
            <li>
              <img src={Logo4} alt="vector"  className="vector"/>
              <h4>Amazing Support</h4>
              <p>Around the clock that support</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AfterHero;
