import React from "react";
import { FaChevronRight } from "react-icons/fa";
import './nextBtn.css'


export default function NextBtn({ onClick, title, className }) {
  return (
    <div className="two-items">

      <button className={className} onClick={onClick}>
        {title}
      </button>
      <FaChevronRight className="next-icon" />
    </div>
  );
}
