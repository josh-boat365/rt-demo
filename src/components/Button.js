import React, {useState} from "react";


const Button = ({ text, onClick}) => {
  const [className, setClassName] = useState("button-29");

  const handleClick = () => {
      setClassName("button-24");
      onClick();
  };

  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
}

export default Button;
