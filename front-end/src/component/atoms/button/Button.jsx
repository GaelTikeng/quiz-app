
import React from 'react'

function Button({onClick, title, className}) {
  return (
    <div>
      <button type='button'
      onClick={onClick}
      className={className}
      >
        {title}
      </button>
    </div>
  );
}

export default Button