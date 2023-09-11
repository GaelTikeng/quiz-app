import React from "react";
import "./Sidebar.css";
import Ellipse from "../../../../public/image/Ellipse1.png";

function Sidebar() {
  return (
    <div className="side_container">
      <div className="avatar_container">
        <div className="avatar_infos">
          <img src={Ellipse} alt="Avatar_image" className="avatar_img" />
          <p>Avatar name</p>
        </div>
        <div className="side_midle">
          
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
