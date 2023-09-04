import React from "react";
import './button.css'


export default function Button ({onClick, title}) {

  return (
    <div>
      <button
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}