
import React from 'react'

function Button({onClick, title, className, type}) {
  return (
    <div>
      <button type={type}
      onClick={onClick}
      className={className}
      >
        {title}
      </button>
    </div>
  );
}

export default Button