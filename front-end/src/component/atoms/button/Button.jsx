
import React from 'react'

function Button({onClick, title, className, type, disable}) {
  return (
    <div>
      <button type={type}
      onClick={onClick}
      disabled={disable}
      className={className}
      >
        {title}
      </button>
    </div>
  );
}

export default Button