import React from "react";

function Button({ onClick, title, className, children }) {
  return (
    <div>
      <button type="button" onClick={onClick} className={className}>
        <div className="icon">{children}</div>
        {title}
      </button>
    </div>
  );
}

export default Button;
